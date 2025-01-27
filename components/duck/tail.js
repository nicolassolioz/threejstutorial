import * as THREE from 'three';

export function createTail() {
    const geometry = new THREE.ConeGeometry(0.3, 0.5, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const tail = new THREE.Mesh(geometry, material);

    // Position and rotate the tail
    tail.rotation.x = -Math.PI / 2;
    tail.position.set(0, -0.4, -0.7);

    return tail;
}
