import * as THREE from 'three';

export function createEyes() {
    const eyesGroup = new THREE.Group();

    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

    // Left Eye
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, 0.35, 0.85);

    // Right Eye
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 0.35, 0.85);

    eyesGroup.add(leftEye, rightEye);
    return eyesGroup;
}
