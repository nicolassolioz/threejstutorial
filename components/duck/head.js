import * as THREE from 'three';

export function createHead() {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const head = new THREE.Mesh(geometry, material);

    // Position the head slightly above the body
    head.position.set(0, 1, 0.4);

    return head;
}
