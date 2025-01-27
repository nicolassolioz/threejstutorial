import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createChair } from './components/office/chair.js';
import { createDesk } from './components/office/desk.js';
import { createKeyBoard } from './components/office/keyboard.js';
import { createMonitor } from './components/office/monitor.js';
import { createMouse } from './components/office/mouse.js';
import { createDuck } from './components/duck/duck.js';
import { createDeskLamp } from './components/office/deskLamp.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xd3d3d3); // Light gray background (hexadecimal color code)
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 2, 5);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Add components to the scene

// Desk/computer components
const chair = createChair();
scene.add(chair);

const desk = createDesk();
scene.add(desk);

const keyboard = createKeyBoard();
scene.add(keyboard);

const mouse = createMouse();
scene.add(mouse);

const monitor = createMonitor();
scene.add(monitor);

const deskLamp = createDeskLamp();
deskLamp.scale.set(0.5, 0.5, 0.5);
deskLamp.position.set(-1.02, 0.85, -0.5);
scene.add(deskLamp);


// Add a duck because why not
const duck = createDuck();
duck.scale.set(0.1, 0.1, 0.1);
duck.rotation.y = Math.PI;
duck.position.set(0.70, 0.92, -0.5);
scene.add(duck);

// Animation loop
function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();
