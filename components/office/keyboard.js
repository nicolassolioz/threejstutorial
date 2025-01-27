// keyboard.js
import * as THREE from 'three';

export function createKeyBoard() {
    const keyboard = new THREE.BoxGeometry(1, 0.1, 0.5);
    const keyboardMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
    const keyboardMesh = new THREE.Mesh(keyboard, keyboardMaterial);
    keyboardMesh.position.set(0, 0.9, -0.5);
    return keyboardMesh;
} 
