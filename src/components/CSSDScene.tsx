import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import type { InteractionId, QualityCase, StageId } from '../types';
import { FLOW_STEPS } from '../data/training';

interface CSSDSceneProps {
  stage: StageId;
  riskFound: InteractionId[];
  selectedIds: InteractionId[];
  flowIndex: number;
  qualityCase: QualityCase;
  aerosolSignal: number;
  onInteract: (id: InteractionId) => void;
}

type StageGroups = Partial<Record<'risk' | 'brush' | 'flow' | 'dry' | 'quality', THREE.Group>>;

interface SceneRefs {
  renderer?: THREE.WebGLRenderer;
  camera?: THREE.PerspectiveCamera;
  controls?: OrbitControls;
  scene?: THREE.Scene;
  stageGroups: StageGroups;
  interactiveObjects: THREE.Object3D[];
  reticle?: THREE.Mesh;
  aerosolGroup?: THREE.Group;
  aerosolStartedAt: number;
  gazeId: string | null;
  gazeStartedAt: number;
  gazeCooldownUntil: number;
  qualityScreen?: THREE.Mesh;
  qualityTexture?: THREE.CanvasTexture;
}

const flowIds = FLOW_STEPS.map((step) => step.id);

function createTextSprite(
  text: string,
  options: {
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string;
    background?: string;
  } = {},
) {
  const width = options.width ?? 512;
  const height = options.height ?? 128;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, width, height);
  if (options.background) {
    ctx.fillStyle = options.background;
    roundRect(ctx, 8, 8, width - 16, height - 16, 24);
    ctx.fill();
  }
  ctx.font = `700 ${options.fontSize ?? 34}px system-ui, -apple-system, "Microsoft YaHei", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = options.color ?? '#16334f';
  wrapText(ctx, text, width / 2, height / 2, width - 44, options.fontSize ?? 34, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(width / 360, height / 360, 1);
  return sprite;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  canvasHeight: number,
) {
  const chars = Array.from(text);
  const lines: string[] = [];
  let line = '';
  chars.forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = testLine;
    }
  });
  if (line) lines.push(line);
  const lineHeight = fontSize * 1.2;
  const startY = Math.max(fontSize, y - ((lines.length - 1) * lineHeight) / 2);
  lines.slice(0, Math.floor(canvasHeight / lineHeight)).forEach((currentLine, index) => {
    ctx.fillText(currentLine, x, startY + index * lineHeight);
  });
}

function createQualityTexture(qualityCase: QualityCase) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createLinearGradient(0, 0, 1024, 512);
  gradient.addColorStop(0, '#d9edf6');
  gradient.addColorStop(1, '#f9fcff');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 512);

  ctx.strokeStyle = '#7aa7bb';
  ctx.lineWidth = 42;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(120, 270);
  ctx.bezierCurveTo(290, 190, 430, 310, 600, 240);
  ctx.bezierCurveTo(760, 176, 840, 252, 930, 205);
  ctx.stroke();

  ctx.strokeStyle = '#f5fbff';
  ctx.lineWidth = 28;
  ctx.beginPath();
  ctx.moveTo(120, 270);
  ctx.bezierCurveTo(290, 190, 430, 310, 600, 240);
  ctx.bezierCurveTo(760, 176, 840, 252, 930, 205);
  ctx.stroke();

  if (qualityCase.id === 'obvious') {
    drawResidueBlob(ctx, 420, 265, 44, '#9b3f25');
    drawResidueBlob(ctx, 590, 238, 36, '#b04e2b');
    drawResidueBlob(ctx, 705, 220, 24, '#7f3b23');
  }

  if (qualityCase.id === 'hidden') {
    for (let i = 0; i < 16; i += 1) {
      const x = 300 + i * 34;
      const y = 250 + Math.sin(i * 1.4) * 28;
      drawResidueBlob(ctx, x, y, i % 3 === 0 ? 12 : 8, 'rgba(148, 73, 43, 0.55)');
    }
  }

  if (qualityCase.id === 'clean') {
    ctx.fillStyle = 'rgba(47, 143, 97, 0.16)';
    ctx.beginPath();
    ctx.ellipse(512, 254, 360, 108, -0.1, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = '#14324d';
  ctx.font = '700 42px system-ui, -apple-system, "Microsoft YaHei", sans-serif';
  ctx.fillText(qualityCase.title, 52, 74);
  ctx.font = '500 28px system-ui, -apple-system, "Microsoft YaHei", sans-serif';
  ctx.fillStyle = '#315a73';
  ctx.fillText(qualityCase.detail, 52, 124);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function drawResidueBlob(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(x, y, radius * 1.25, radius * 0.82, Math.random() * 0.8, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(80, 34, 22, 0.22)';
  ctx.beginPath();
  ctx.arc(x + radius * 0.25, y - radius * 0.12, radius * 0.35, 0, Math.PI * 2);
  ctx.fill();
}

function makeMat(color: number, options: THREE.MeshStandardMaterialParameters = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.62,
    metalness: 0.08,
    ...options,
  });
}

function setVector(object: THREE.Object3D, x: number, y: number, z: number) {
  object.position.set(x, y, z);
  return object;
}

function hasVisibleAncestors(object: THREE.Object3D) {
  let current: THREE.Object3D | null = object;
  while (current) {
    if (!current.visible) return false;
    current = current.parent;
  }
  return true;
}

function findInteractionId(object: THREE.Object3D): InteractionId | null {
  let current: THREE.Object3D | null = object;
  while (current) {
    if (current.userData.interactionId) {
      return current.userData.interactionId as InteractionId;
    }
    current = current.parent;
  }
  return null;
}

export default function CSSDScene({
  stage,
  riskFound,
  selectedIds,
  flowIndex,
  qualityCase,
  aerosolSignal,
  onInteract,
}: CSSDSceneProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<SceneRefs>({
    stageGroups: {},
    interactiveObjects: [],
    aerosolStartedAt: -Infinity,
    gazeId: null,
    gazeStartedAt: 0,
    gazeCooldownUntil: 0,
  });
  const latestProps = useRef({ stage, riskFound, selectedIds, flowIndex, qualityCase, onInteract });

  useEffect(() => {
    latestProps.current = { stage, riskFound, selectedIds, flowIndex, qualityCase, onInteract };
    updateStageVisibility(refs.current, stage);
    updateHighlights(refs.current, selectedIds, riskFound, flowIndex);
    updateQualityScreen(refs.current, qualityCase);
  }, [stage, riskFound, selectedIds, flowIndex, qualityCase, onInteract]);

  useEffect(() => {
    if (aerosolSignal > 0) {
      triggerAerosol(refs.current);
    }
  }, [aerosolSignal]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#eef8fc');
    scene.fog = new THREE.Fog('#eef8fc', 11, 24);

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.05, 100);
    camera.position.set(4.6, 2.7, 6.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.xr.enabled = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const vrButton = VRButton.createButton(renderer);
    vrButton.classList.add('webxr-button');
    mount.appendChild(vrButton);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.25, 0);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI * 0.48;
    controls.minDistance = 3.6;
    controls.maxDistance = 10;

    refs.current.renderer = renderer;
    refs.current.camera = camera;
    refs.current.controls = controls;
    refs.current.scene = scene;

    buildScene(scene, camera, refs.current);
    updateStageVisibility(refs.current, latestProps.current.stage);
    updateHighlights(refs.current, latestProps.current.selectedIds, latestProps.current.riskFound, latestProps.current.flowIndex);
    updateQualityScreen(refs.current, latestProps.current.qualityCase);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const selectFromPointer = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const id = pickInteraction(raycaster, refs.current);
      if (id) latestProps.current.onInteract(id);
    };

    renderer.domElement.addEventListener('pointerdown', selectFromPointer);

    const setupController = (index: number) => {
      const controller = renderer.xr.getController(index);
      controller.addEventListener('selectstart', () => {
        const tempMatrix = new THREE.Matrix4();
        tempMatrix.identity().extractRotation(controller.matrixWorld);
        raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
        const id = pickInteraction(raycaster, refs.current);
        if (id) latestProps.current.onInteract(id);
      });
      scene.add(controller);
    };
    setupController(0);
    setupController(1);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    renderer.setAnimationLoop((time: number) => {
      controls.update();
      animateScene(refs.current, time);
      updateGazeSelection(refs.current, raycaster, time);
      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      renderer.domElement.removeEventListener('pointerdown', selectFromPointer);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      vrButton.remove();
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, []);

  return <div className="scene-mount" ref={mountRef} aria-label="CSSD去污区三维训练场景" />;
}

function buildScene(scene: THREE.Scene, camera: THREE.PerspectiveCamera, refs: SceneRefs) {
  addLights(scene);
  addRoom(scene);
  addStaticEquipment(scene);
  refs.stageGroups.risk = addRiskStage(scene, refs);
  refs.stageGroups.brush = addBrushStage(scene, refs);
  refs.stageGroups.flow = addFlowStage(scene, refs);
  refs.stageGroups.dry = addDryStage(scene, refs);
  refs.stageGroups.quality = addQualityStage(scene, refs);
  refs.aerosolGroup = createAerosolGroup();
  scene.add(refs.aerosolGroup);
  refs.reticle = createReticle();
  camera.add(refs.reticle);
  scene.add(camera);
}

function addLights(scene: THREE.Scene) {
  const hemi = new THREE.HemisphereLight('#ffffff', '#b5ceda', 1.3);
  scene.add(hemi);

  const key = new THREE.DirectionalLight('#ffffff', 2.2);
  key.position.set(3, 7, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  scene.add(key);

  const strip = new THREE.RectAreaLight('#dff6ff', 4, 6, 1.2);
  strip.position.set(0, 4.3, -2.2);
  strip.rotation.x = -Math.PI / 2.8;
  scene.add(strip);
}

function addRoom(scene: THREE.Scene) {
  const floor = new THREE.Mesh(new THREE.BoxGeometry(12, 0.12, 10), makeMat(0xdce9ee));
  floor.position.y = -0.06;
  floor.receiveShadow = true;
  scene.add(floor);

  const backWall = new THREE.Mesh(new THREE.BoxGeometry(12, 4.2, 0.15), makeMat(0xf7fbfd));
  backWall.position.set(0, 2.05, -4.2);
  scene.add(backWall);

  const sideWall = new THREE.Mesh(new THREE.BoxGeometry(0.15, 4.2, 10), makeMat(0xe9f4f8));
  sideWall.position.set(-5.95, 2.05, 0);
  scene.add(sideWall);

  const baseboard = new THREE.Mesh(new THREE.BoxGeometry(11.6, 0.18, 0.08), makeMat(0xbfd2dc));
  baseboard.position.set(0, 0.18, -4.08);
  scene.add(baseboard);

  for (let i = 0; i < 4; i += 1) {
    const light = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.04, 0.24), makeMat(0xffffff, { emissive: '#dff8ff', emissiveIntensity: 0.65 }));
    light.position.set(-3.2 + i * 2.1, 3.95, -3.62);
    scene.add(light);
  }
}

function addStaticEquipment(scene: THREE.Scene) {
  const tableMat = makeMat(0xcbd7dc, { metalness: 0.22, roughness: 0.38 });
  const table = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.18, 1.9), tableMat);
  table.position.set(0.2, 0.92, 0.2);
  table.castShadow = true;
  table.receiveShadow = true;
  scene.add(table);

  const sinkOuter = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.75, 1.45), makeMat(0xbfd5dd, { metalness: 0.18 }));
  sinkOuter.position.set(-2.85, 0.72, -0.15);
  sinkOuter.castShadow = true;
  scene.add(sinkOuter);
  const sinkBasin = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.08, 1.06), makeMat(0xe7f4f8, { metalness: 0.08 }));
  sinkBasin.position.set(-2.85, 1.13, -0.15);
  scene.add(sinkBasin);
  const water = new THREE.Mesh(
    new THREE.BoxGeometry(1.72, 0.035, 0.92),
    makeMat(0x8fd2ed, { transparent: true, opacity: 0.52, roughness: 0.1 }),
  );
  water.position.set(-2.85, 1.19, -0.15);
  scene.add(water);

  const tray = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.12, 0.82), makeMat(0xd7e2e6));
  tray.position.set(2.25, 1.04, 0.25);
  scene.add(tray);

  const basket = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(1.25, 0.48, 0.72)),
    new THREE.LineBasicMaterial({ color: '#7d98a7' }),
  );
  basket.position.set(2.25, 1.32, 0.25);
  scene.add(basket);

  const enzyme = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 0.78, 32), makeMat(0x4db7c4, { transparent: true, opacity: 0.9 }));
  enzyme.position.set(-0.82, 1.36, 0.65);
  scene.add(enzyme);
  const enzymeLabel = createTextSprite('多酶清洗液', { width: 420, height: 96, fontSize: 32, background: 'rgba(255,255,255,0.86)' });
  enzymeLabel.position.set(-0.82, 1.9, 0.65);
  scene.add(enzymeLabel);

  const riskPanel = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.9, 0.08), makeMat(0xffffff));
  riskPanel.position.set(-4.95, 2.1, -3.55);
  scene.add(riskPanel);
  const riskLabel = createTextSprite('风险提示面板', { width: 420, height: 100, fontSize: 34, background: 'rgba(222,245,252,0.92)' });
  riskLabel.position.set(-4.95, 2.45, -3.47);
  scene.add(riskLabel);

  const scorePanel = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.9, 0.08), makeMat(0xffffff));
  scorePanel.position.set(4.85, 2.1, -3.55);
  scene.add(scorePanel);
  const scoreLabel = createTextSprite('训练评分面板', { width: 420, height: 100, fontSize: 34, background: 'rgba(222,245,252,0.92)' });
  scoreLabel.position.set(4.85, 2.45, -3.47);
  scene.add(scoreLabel);
}

function createInstrument() {
  const group = new THREE.Group();
  const steel = makeMat(0xc9d0d3, { metalness: 0.48, roughness: 0.28 });
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 2.6, 48, 1, true), steel);
  tube.rotation.z = Math.PI / 2;
  tube.castShadow = true;
  group.add(tube);

  const lumenA = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 0.018, 40), makeMat(0x20303b));
  lumenA.rotation.z = Math.PI / 2;
  lumenA.position.x = 1.32;
  group.add(lumenA);

  const lumenB = lumenA.clone();
  lumenB.position.x = -1.32;
  group.add(lumenB);

  const joint = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.035, 16, 48), makeMat(0xaebdc5, { metalness: 0.45 }));
  joint.rotation.y = Math.PI / 2;
  joint.position.x = -0.38;
  group.add(joint);

  const connector = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.28, 40), makeMat(0xb8c5cb, { metalness: 0.42 }));
  connector.rotation.z = Math.PI / 2;
  connector.position.x = 0.52;
  group.add(connector);

  const residueMat = makeMat(0x9d4228, { emissive: '#5b170f', emissiveIntensity: 0.08 });
  for (let i = 0; i < 10; i += 1) {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(i % 3 === 0 ? 0.038 : 0.026, 12, 12), residueMat.clone());
    dot.position.set(-0.65 + i * 0.13, 0.17 + Math.sin(i) * 0.03, 0.04 + Math.cos(i) * 0.035);
    group.add(dot);
  }
  return group;
}

function addRiskStage(scene: THREE.Scene, refs: SceneRefs) {
  const group = new THREE.Group();
  group.position.set(0.15, 1.42, 0.2);
  const instrument = createInstrument();
  group.add(instrument);

  addHotspot(group, refs, 'risk-lumen', '管腔内部', 1.38, 0.04, 0.0, 0xef6b4f);
  addHotspot(group, refs, 'risk-joint', '接口残留', -0.45, 0.45, 0.08, 0xf2a43a);
  addHotspot(group, refs, 'risk-protein', '蛋白残留', 0.05, 0.38, -0.28, 0xb96b44);
  addHotspot(group, refs, 'risk-aerosol', '气溶胶风险', 1.05, 0.5, -0.56, 0x58b8de);

  const title = createTextSprite('第1关：点击风险热点', { width: 520, height: 110, fontSize: 34, background: 'rgba(255,255,255,0.88)' });
  title.position.set(0, 1.08, -0.78);
  group.add(title);

  scene.add(group);
  return group;
}

function addHotspot(
  parent: THREE.Group,
  refs: SceneRefs,
  id: InteractionId,
  label: string,
  x: number,
  y: number,
  z: number,
  color: number,
) {
  const hotspot = new THREE.Mesh(
    new THREE.SphereGeometry(0.115, 24, 24),
    makeMat(color, { transparent: true, opacity: 0.82, emissive: color, emissiveIntensity: 0.22 }),
  );
  hotspot.position.set(x, y, z);
  makeInteractive(hotspot, id, refs);
  parent.add(hotspot);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.012, 10, 40), makeMat(color, { emissive: color, emissiveIntensity: 0.18 }));
  ring.position.copy(hotspot.position);
  ring.rotation.x = Math.PI / 2;
  makeInteractive(ring, id, refs);
  parent.add(ring);

  const labelSprite = createTextSprite(label, { width: 330, height: 80, fontSize: 30, background: 'rgba(255,255,255,0.82)' });
  labelSprite.position.set(x, y + 0.27, z);
  makeInteractive(labelSprite, id, refs);
  parent.add(labelSprite);
}

function addBrushStage(scene: THREE.Scene, refs: SceneRefs) {
  const group = new THREE.Group();
  group.position.set(0.25, 1.28, 0.15);
  const instrument = createInstrument();
  instrument.position.set(0, 0.35, -0.52);
  group.add(instrument);

  addBrush(group, refs, 'brush-thin', '过细', -1.45, 0, 0.38, 0.045, 0x6aa6c8);
  addBrush(group, refs, 'brush-fit', '合适', 0, 0, 0.38, 0.095, 0x2f9f68);
  addBrush(group, refs, 'brush-thick', '过粗', 1.45, 0, 0.38, 0.155, 0xd46b54);

  const title = createTextSprite('第2关：选择匹配管腔直径的刷子', {
    width: 650,
    height: 110,
    fontSize: 32,
    background: 'rgba(255,255,255,0.88)',
  });
  title.position.set(0, 1.18, -0.7);
  group.add(title);

  scene.add(group);
  return group;
}

function addBrush(
  parent: THREE.Group,
  refs: SceneRefs,
  id: InteractionId,
  label: string,
  x: number,
  y: number,
  z: number,
  radius: number,
  color: number,
) {
  const brush = new THREE.Group();
  brush.position.set(x, y, z);
  brush.rotation.z = Math.PI / 2;

  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.05, 18), makeMat(0xe8eef1));
  handle.position.y = -0.3;
  brush.add(handle);

  const bristles = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 0.66, 24), makeMat(color, { transparent: true, opacity: 0.78 }));
  bristles.position.y = 0.45;
  makeInteractive(bristles, id, refs);
  brush.add(bristles);

  const target = new THREE.Mesh(new THREE.SphereGeometry(0.28, 24, 24), makeMat(color, { transparent: true, opacity: 0.08 }));
  target.position.y = 0.45;
  makeInteractive(target, id, refs);
  brush.add(target);

  const labelSprite = createTextSprite(label, { width: 260, height: 82, fontSize: 32, background: 'rgba(255,255,255,0.86)' });
  labelSprite.position.set(0, 0.98, 0);
  labelSprite.rotation.z = -Math.PI / 2;
  makeInteractive(labelSprite, id, refs);
  brush.add(labelSprite);
  parent.add(brush);
}

function addFlowStage(scene: THREE.Scene, refs: SceneRefs) {
  const group = new THREE.Group();
  group.position.set(0.0, 1.18, 0.1);
  const instrument = createInstrument();
  instrument.position.set(0.45, 0.34, 0.12);
  group.add(instrument);

  addActionStation(group, refs, 'step-pre-rinse', '1 预冲洗', -2.75, 0.18, -0.18, 0x5fb7d3);
  addActionStation(group, refs, 'step-enzyme', '2 清洗液', -1.15, 0.34, 0.58, 0x42adbb);
  addActionStation(group, refs, 'step-brush', '3 刷洗', 0.05, 0.1, 0.72, 0x2f9f68);
  addActionStation(group, refs, 'step-rinse', '4 充分冲洗', 1.45, 0.22, 0.52, 0x61a9d8);
  addActionStation(group, refs, 'step-low-rinse', '5 液面下冲洗', -2.75, 0.55, -0.6, 0x3f91b8);
  addActionStation(group, refs, 'step-final-rinse', '6 终末冲洗', 2.65, 0.2, -0.25, 0x86cbd8);

  const hazard = createBoxButton('高压直冲', 'hazard-high-pressure', 0xd9534f, refs);
  hazard.position.set(1.75, 0.98, -0.82);
  group.add(hazard);

  const warning = createTextSprite('错误示范：不要对准开口高压直冲', {
    width: 650,
    height: 96,
    fontSize: 30,
    background: 'rgba(255,239,236,0.9)',
    color: '#8f2f26',
  });
  warning.position.set(1.25, 1.42, -0.84);
  group.add(warning);

  scene.add(group);
  return group;
}

function addActionStation(
  parent: THREE.Group,
  refs: SceneRefs,
  id: InteractionId,
  label: string,
  x: number,
  y: number,
  z: number,
  color: number,
) {
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.25, 0.1, 32),
    makeMat(color, { transparent: true, opacity: 0.72, emissive: color, emissiveIntensity: 0.08 }),
  );
  base.position.set(x, y, z);
  makeInteractive(base, id, refs);
  parent.add(base);

  const labelSprite = createTextSprite(label, { width: 340, height: 84, fontSize: 30, background: 'rgba(255,255,255,0.86)' });
  labelSprite.position.set(x, y + 0.42, z);
  makeInteractive(labelSprite, id, refs);
  parent.add(labelSprite);
}

function addDryStage(scene: THREE.Scene, refs: SceneRefs) {
  const group = new THREE.Group();
  group.position.set(0.15, 1.25, 0.1);
  const instrument = createInstrument();
  instrument.position.set(0, 0.38, -0.42);
  group.add(instrument);

  const none = createBoxButton('自然放置', 'dry-none', 0xd8a15d, refs);
  none.position.set(-1.55, 0.18, 0.45);
  group.add(none);

  const surface = createBoxButton('外表擦干', 'dry-surface', 0x6ba7c5, refs);
  surface.position.set(0, 0.18, 0.45);
  group.add(surface);

  const full = createBoxButton('管腔内外干燥', 'dry-full', 0x39a66b, refs);
  full.position.set(1.65, 0.18, 0.45);
  group.add(full);

  const dryGun = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 0.9, 24), makeMat(0xdfe8ed, { metalness: 0.25 }));
  dryGun.rotation.z = Math.PI / 2.2;
  dryGun.position.set(1.63, 0.72, -0.1);
  makeInteractive(dryGun, 'dry-full', refs);
  group.add(dryGun);

  scene.add(group);
  return group;
}

function addQualityStage(scene: THREE.Scene, refs: SceneRefs) {
  const group = new THREE.Group();
  group.position.set(0, 1.22, -0.12);

  const frame = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.55, 0.08), makeMat(0x25465c));
  frame.position.set(0, 0.88, -0.72);
  group.add(frame);

  const screenMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.92, 1.26), screenMaterial);
  screen.position.set(0, 0.88, -0.66);
  refs.qualityScreen = screen;
  group.add(screen);

  const title = createTextSprite('放大观察屏', { width: 420, height: 92, fontSize: 34, background: 'rgba(255,255,255,0.88)' });
  title.position.set(0, 1.78, -0.64);
  group.add(title);

  const reclean = createBoxButton('重新清洗', 'quality-reclean', 0x2f9f68, refs);
  reclean.position.set(-1.65, 0.06, 0.68);
  group.add(reclean);

  const packageNext = createBoxButton('进入检查包装', 'quality-package', 0x408bc3, refs);
  packageNext.position.set(0, 0.06, 0.68);
  group.add(packageNext);

  const report = createBoxButton('报告老师', 'quality-report', 0xd09a42, refs);
  report.position.set(1.65, 0.06, 0.68);
  group.add(report);

  scene.add(group);
  return group;
}

function createBoxButton(text: string, id: InteractionId, color: number, refs: SceneRefs) {
  const group = new THREE.Group();
  const plate = new THREE.Mesh(
    new THREE.BoxGeometry(1.28, 0.2, 0.5),
    makeMat(color, { transparent: true, opacity: 0.92, emissive: color, emissiveIntensity: 0.08 }),
  );
  plate.castShadow = true;
  makeInteractive(plate, id, refs);
  group.add(plate);
  const label = createTextSprite(text, { width: 380, height: 90, fontSize: 32, background: 'rgba(255,255,255,0.9)' });
  label.position.set(0, 0.28, 0.04);
  makeInteractive(label, id, refs);
  group.add(label);
  return group;
}

function makeInteractive(object: THREE.Object3D, id: InteractionId, refs: SceneRefs) {
  object.userData.interactionId = id;
  object.userData.baseScale = object.scale.clone();
  if (object instanceof THREE.Mesh || object instanceof THREE.Sprite) {
    const material = object.material;
    if (Array.isArray(material)) {
      material.forEach((mat) => {
        if ('color' in mat && mat.color instanceof THREE.Color) {
          object.userData.baseColor = mat.color.getHex();
        }
      });
    } else if ('color' in material && material.color instanceof THREE.Color) {
      object.userData.baseColor = material.color.getHex();
    }
  }
  refs.interactiveObjects.push(object);
}

function updateStageVisibility(refs: SceneRefs, stage: StageId) {
  const mapping: Record<StageId, keyof StageGroups> = {
    1: 'risk',
    2: 'brush',
    3: 'flow',
    4: 'dry',
    5: 'quality',
  };
  Object.entries(refs.stageGroups).forEach(([key, group]) => {
    if (group) group.visible = key === mapping[stage];
  });
}

function updateHighlights(refs: SceneRefs, selectedIds: InteractionId[], riskFound: InteractionId[], flowIndex: number) {
  const activeIds = new Set<InteractionId>(selectedIds);
  riskFound.forEach((id) => activeIds.add(id));
  const expectedFlowId = flowIds[flowIndex];

  refs.interactiveObjects.forEach((object) => {
    const id = findInteractionId(object);
    if (!id) return;
    const isDone = activeIds.has(id);
    const isExpected = id === expectedFlowId;
    const baseScale = object.userData.baseScale as THREE.Vector3 | undefined;
    if (baseScale) {
      const factor = isDone ? 1.18 : isExpected ? 1.12 : 1;
      object.scale.copy(baseScale).multiplyScalar(factor);
    }

    if (object instanceof THREE.Mesh || object instanceof THREE.Sprite) {
      const material = object.material;
      const applyMaterial = (mat: THREE.Material) => {
        if (!('color' in mat) || !(mat.color instanceof THREE.Color)) return;
        const original = object.userData.baseColor ?? mat.color.getHex();
        if (isDone) {
          mat.color.set('#2fa36b');
        } else if (isExpected) {
          mat.color.set('#1b8ec5');
        } else {
          mat.color.set(original);
        }
        const standardMaterial = mat as THREE.MeshStandardMaterial;
        if (standardMaterial.emissive instanceof THREE.Color) {
          standardMaterial.emissive.set(isDone ? '#1f7a4f' : isExpected ? '#155b78' : '#000000');
          standardMaterial.emissiveIntensity = isDone || isExpected ? 0.18 : 0;
        }
      };
      if (Array.isArray(material)) {
        material.forEach(applyMaterial);
      } else {
        applyMaterial(material);
      }
    }
  });
}

function updateQualityScreen(refs: SceneRefs, qualityCase: QualityCase) {
  if (!refs.qualityScreen) return;
  if (refs.qualityTexture) refs.qualityTexture.dispose();
  refs.qualityTexture = createQualityTexture(qualityCase);
  const material = refs.qualityScreen.material as THREE.MeshBasicMaterial;
  material.map = refs.qualityTexture;
  material.needsUpdate = true;
}

function pickInteraction(raycaster: THREE.Raycaster, refs: SceneRefs) {
  const visibleObjects = refs.interactiveObjects.filter(hasVisibleAncestors);
  const hits = raycaster.intersectObjects(visibleObjects, false);
  if (hits.length === 0) return null;
  return findInteractionId(hits[0].object);
}

function updateGazeSelection(refs: SceneRefs, raycaster: THREE.Raycaster, time: number) {
  const renderer = refs.renderer;
  const camera = refs.camera;
  if (!renderer || !camera || !renderer.xr.isPresenting) {
    if (refs.reticle) refs.reticle.visible = false;
    return;
  }
  if (refs.reticle) refs.reticle.visible = true;
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const id = pickInteraction(raycaster, refs);
  if (!id) {
    refs.gazeId = null;
    refs.gazeStartedAt = 0;
    return;
  }
  if (time < refs.gazeCooldownUntil) return;
  if (refs.gazeId !== id) {
    refs.gazeId = id;
    refs.gazeStartedAt = time;
    return;
  }
  if (time - refs.gazeStartedAt > 1400) {
    latestInteract(refs, id);
    refs.gazeCooldownUntil = time + 900;
    refs.gazeStartedAt = time;
  }
}

function latestInteract(_refs: SceneRefs, id: InteractionId) {
  const event = new CustomEvent('cssd-gaze-interaction', { detail: id });
  window.dispatchEvent(event);
}

function animateScene(refs: SceneRefs, time: number) {
  refs.interactiveObjects.forEach((object) => {
    const id = findInteractionId(object);
    if (!id || !id.startsWith('risk-') || !hasVisibleAncestors(object)) return;
    const baseScale = object.userData.baseScale as THREE.Vector3 | undefined;
    if (!baseScale) return;
    const pulse = 1 + Math.sin(time * 0.006 + object.id) * 0.045;
    object.scale.copy(baseScale).multiplyScalar(pulse);
  });

  if (!refs.aerosolGroup) return;
  const elapsed = (time - refs.aerosolStartedAt) / 1000;
  if (elapsed < 0 || elapsed > 3) {
    refs.aerosolGroup.visible = false;
    return;
  }
  refs.aerosolGroup.visible = true;
  refs.aerosolGroup.children.forEach((particle: THREE.Object3D) => {
    const base = particle.userData.base as THREE.Vector3;
    const velocity = particle.userData.velocity as THREE.Vector3;
    particle.position.copy(base).addScaledVector(velocity, elapsed);
    const mat = (particle as THREE.Mesh).material as THREE.MeshStandardMaterial;
    mat.opacity = Math.max(0, 0.48 * (1 - elapsed / 3));
  });
}

function createReticle() {
  const reticle = new THREE.Mesh(
    new THREE.RingGeometry(0.018, 0.024, 32),
    new THREE.MeshBasicMaterial({ color: '#1b8ec5', transparent: true, opacity: 0.88 }),
  );
  reticle.position.set(0, 0, -1.2);
  reticle.visible = false;
  return reticle;
}

function createAerosolGroup() {
  const group = new THREE.Group();
  group.visible = false;
  group.position.set(1.05, 1.65, -0.35);
  for (let i = 0; i < 64; i += 1) {
    const particle = new THREE.Mesh(
      new THREE.SphereGeometry(0.025 + Math.random() * 0.018, 10, 10),
      makeMat(0x7ecce5, { transparent: true, opacity: 0.42, roughness: 0.2 }),
    );
    const base = new THREE.Vector3((Math.random() - 0.5) * 0.16, (Math.random() - 0.5) * 0.12, (Math.random() - 0.5) * 0.16);
    const velocity = new THREE.Vector3(
      0.25 + Math.random() * 0.8,
      0.16 + Math.random() * 0.75,
      -0.38 + Math.random() * 0.76,
    );
    particle.userData.base = base;
    particle.userData.velocity = velocity;
    particle.position.copy(base);
    group.add(particle);
  }
  return group;
}

function triggerAerosol(refs: SceneRefs) {
  refs.aerosolStartedAt = performance.now();
  refs.aerosolGroup?.children.forEach((particle: THREE.Object3D) => {
    const base = particle.userData.base as THREE.Vector3;
    particle.position.copy(base);
  });
}
