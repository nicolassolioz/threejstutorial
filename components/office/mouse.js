// mouse.js
import * as THREE from 'three';

export function createMouse() {
    const mouse = new THREE.BoxGeometry(0.2, 0.05, 0.3);
    const mouseMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const mouseMesh = new THREE.Mesh(mouse, mouseMaterial);
    mouseMesh.position.set(-0.7, 0.9, -0.5);
    return mouseMesh;
}

