import * as THREE from 'three';

export function createBeak() {
    const geometry = new THREE.ConeGeometry(0.2, 0.4, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 });
    const beak = new THREE.Mesh(geometry, material);

    // Position the beak
    beak.rotation.x = Math.PI / 2; // Point the cone forward
    beak.position.set(0, 0.2, 0);

    return beak;
}
