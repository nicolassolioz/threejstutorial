// desk.js
import * as THREE from 'three';

export function createDesk() {
    const deskGroup = new THREE.Group();
    
    const deskGeometry = new THREE.BoxGeometry(3, 0.1, 2);
    const deskMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });

    const deskMesh = new THREE.Mesh(deskGeometry, deskMaterial);

    deskMesh.position.set(0, 0.8, 0);
    
    // Desk Legs
    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 16); // Cylinder legs
    
    // Calculate leg positions
    const positions = [
        { x: -1.4, z: -0.9 }, // Front-left
        { x: 1.4, z: -0.9 },  // Front-right
        { x: -1.4, z: 0.9 },  // Back-left
        { x: 1.4, z: 0.9 },   // Back-right
    ];
    
    positions.forEach((pos) => {
        const leg = new THREE.Mesh(legGeometry, deskMaterial);
        leg.position.set(pos.x, 0.4, pos.z); // Center the legs under the desk
        deskGroup.add(leg);
    });

    deskGroup.add(deskMesh);

    return deskGroup;
}
