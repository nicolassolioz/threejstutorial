// chair.js
import * as THREE from 'three';

export function createChair() {
    const chairGroup = new THREE.Group();

    // Chair Seat
    const chairSeat = new THREE.BoxGeometry(0.8, 0.1, 0.8);
    const chairMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const chairSeatMesh = new THREE.Mesh(chairSeat, chairMaterial);
    chairSeatMesh.position.set(0, 0.4, -1.2);
    chairGroup.add(chairSeatMesh);

    // Chair Back
    const chairBack = new THREE.BoxGeometry(0.8, 0.5, 0.1);
    const chairBackMesh = new THREE.Mesh(chairBack, chairMaterial);
    chairBackMesh.position.set(0, 0.65, -1.55);
    chairGroup.add(chairBackMesh);

    // Chair Legs
    const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.4);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });

    for (let i = -1; i <= 1; i += 2) {
        for (let j = -1; j <= 1; j += 2) {
            const leg = new THREE.Mesh(legGeometry, legMaterial);
            leg.position.set(i * 0.3, 0.2, j * 0.3 - 1.2);
            chairGroup.add(leg);
        }
    }

    return chairGroup;
}
