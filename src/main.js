import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'stats.js';

import './style.css';

const scene = new THREE.Scene();
const canvas = document.querySelector('.canvas');

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const cursor = {
    x: 0,
    y: 0,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const stats = new Stats();
stats.showPanel(0);
document.body.append(stats.dom);

scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setClearColor(0x0a0a1a, 1);
renderer.setSize(sizes.width, sizes.height);

const createStarTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(32, 32, 32, 0, Math.PI * 2);
    context.fill();
    return new THREE.CanvasTexture(canvas);
};

const starGeometry = new THREE.BufferGeometry();
const starCount = 5000;
const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 2000;
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 3,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.9,
    map: createStarTexture(),
    alphaTest: 0.1,
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

const geometries = {
    'Torus Knot': new THREE.TorusKnotGeometry(1, 0.25, 100, 16, 1, 5),
    'Sphere': new THREE.SphereGeometry(1, 32, 32),
    'Cube': new THREE.BoxGeometry(1, 1, 1, 10, 10, 10),
};

const colorPresets = {
    'Pink-Cyan': { start: '#ff00ff', end: '#00f0ff' },
    'Purple-Blue': { start: '#ba83c4', end: '#1b96f3' },
    'Green-Magenta': { start: '#00ff87', end: '#ff00a1' },
};

const material = new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: 0 },
        uColorStart: { value: new THREE.Color('#ff00ff') },
        uColorEnd: { value: new THREE.Color('#00f0ff') },
    },
    vertexShader: `
        varying vec3 vPosition;
        void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorStart;
        uniform vec3 uColorEnd;
        varying vec3 vPosition;
        void main() {
            float mixFactor = (sin(vPosition.y + uTime) + 1.0) * 0.5;
            vec3 color = mix(uColorStart, uColorEnd, mixFactor);
            gl_FragColor = vec4(color, 1.0);
        }
    `,
    wireframe: true,
});

const mesh = new THREE.Mesh(geometries['Torus Knot'], material);
scene.add(mesh);

const shapeSelect = document.getElementById('shape-select');
const colorPresetSelect = document.getElementById('color-preset');
const scaleSlider = document.getElementById('scale-slider');
const toggleVisibilityButton = document.getElementById('toggle-visibility');

shapeSelect.addEventListener('change', (event) => {
    mesh.geometry = geometries[event.target.value];
});

colorPresetSelect.addEventListener('change', (event) => {
    const preset = colorPresets[event.target.value];
    material.uniforms.uColorStart.value.set(preset.start);
    material.uniforms.uColorEnd.value.set(preset.end);
});

scaleSlider.addEventListener('input', (event) => {
    const scale = parseFloat(event.target.value);
    mesh.scale.set(scale, scale, scale);
});

toggleVisibilityButton.addEventListener('click', () => {
    mesh.visible = !mesh.visible;
});

window.addEventListener('mousemove', (event) => {
    cursor.x = -(event.clientX / sizes.width - 0.5);
    cursor.y = event.clientY / sizes.height - 0.5;
});

const animate = () => {
    stats.begin();
    controls.update();
    renderer.render(scene, camera);
    stats.end();
    window.requestAnimationFrame(animate);
};
animate();

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener('dblclick', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        canvas.requestFullscreen();
    }
});