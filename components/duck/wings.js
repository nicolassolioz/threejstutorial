import * as THREE from 'three';

export function createWings() {
    const wingsGroup = new THREE.Group();

    const wingGeometry = new THREE.BoxGeometry(0.5, 0.2, 0.3);
    const wingMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });

    // Left Wing
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-0.8, 0.1, 0);
    leftWing.rotation.z = Math.PI / 4;

    // Right Wing
    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(0.8, 0.1, 0);
    rightWing.rotation.z = -Math.PI / 4;

    wingsGroup.add(leftWing, rightWing);
    return wingsGroup;
}
