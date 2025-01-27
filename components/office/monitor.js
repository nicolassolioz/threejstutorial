// monitor.js
import * as THREE from 'three';

export function createMonitor() {
    const monitorGroup = new THREE.Group();

    const monitor = new THREE.BoxGeometry(1.5, 1, 0.1);
    const monitorMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const monitorMesh = new THREE.Mesh(monitor, monitorMaterial);
    monitorMesh.position.set(0, 1.5, 0);

    // Screen
    const screen = new THREE.BoxGeometry(1.3, 0.8, 0.05);
    const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff, emissive: 0x111111 });
    const screenMesh = new THREE.Mesh(screen, screenMaterial);
    screenMesh.position.set(0, 1.5, -0.03);

    monitorGroup.add(screenMesh);
    monitorGroup.add(monitorMesh);

    return monitorGroup;
}



