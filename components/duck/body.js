import * as THREE from 'three';

export function createBody() {
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const body = new THREE.Mesh(geometry, material);

    // Slightly flatten the body
    body.scale.set(1, 0.9, 1.2);

    return body;
}
