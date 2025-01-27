import * as THREE from 'three';

export function createDeskLamp() {
    const deskLampGroup = new THREE.Group();

    // Base of the lamp
    const baseGeometry = new THREE.CylinderGeometry(0.2, 0.3, 0.1, 16);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.set(0, 0.05, 0);
    deskLampGroup.add(base);

    // Lamp arm 1
    const armGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 16);
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
    const arm = new THREE.Mesh(armGeometry, armMaterial);
    arm.position.set(-0.3, 0.4, 0); // Place above the base
    arm.rotation.z = Math.PI / 4; // Tilt the arm
    deskLampGroup.add(arm);

    // Lamp arm 2
    const arm2Geometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 16);
    const arm2 = new THREE.Mesh(arm2Geometry, armMaterial);
    arm2.position.set(-0.14, 0.82, 0); // Place above the base
    arm2.rotation.z = Math.PI / 1.8; // Tilt the arm
    deskLampGroup.add(arm2);

    // Lamp head + bulb inside lamp head 
    // Lamp head
    const lampHeadGroup = new THREE.Group();
    const headGeometry = new THREE.ConeGeometry(0.2, 0.5, 16);
    const headMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0.2, 1.1, 0); // Align the head with the second arm
    head.rotation.z = Math.PI / 2;
    lampHeadGroup.add(head);

    // Bulb inside the lamp head
    const bulbGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const bulbMaterial = new THREE.MeshStandardMaterial({ emissive: 0xffffee, emissiveIntensity: 1 });
    const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
    bulb.position.set(0.4, 1.1, 0); // Center inside the lamp head
    deskLampGroup.add(bulb);

    // PointLight for the lamp
    const lampLight = new THREE.PointLight(0xffffee, 2.8, 7); // Warm light
    lampLight.position.set(0.5, 1.1, 0); // Same as the bulb position
    lampLight.castShadow = true; // Enable shadows
    lampLight.shadow.bias = -0.01;
    lampLight.shadow.mapSize.width = 1024;
    lampLight.shadow.mapSize.height = 1024;

    lampHeadGroup.position.set(0.21, -0.15, 0);
    lampHeadGroup.rotation.z = -0.1

    lampHeadGroup.add(head);
    lampHeadGroup.add(bulb);
    lampHeadGroup.add(lampLight);

    deskLampGroup.add(lampHeadGroup);

    return deskLampGroup;
}
