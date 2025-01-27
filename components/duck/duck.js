import * as THREE from 'three';
import { createBeak } from './beak.js';
import { createEyes } from './eyes.js';
import { createBody } from './body.js';
import { createWings } from './wings.js';
import { createTail } from './tail.js';
import { createHead } from './head.js';

export function createDuck() {
    const duckGroup = new THREE.Group();

    // Add components
    const body = createBody();
    const head = createHead();
    const beak = createBeak();
    const eyes = createEyes();
    const wings = createWings();
    const tail = createTail();

    // Add the components to the duck group
    duckGroup.add(body, head, beak, eyes, wings, tail);

    // Position the beak and eyes relative to the head
    beak.position.set(0, 0.9, 1); // Attach beak to the front of the head
    eyes.position.set(0, 0.9, 0);   // Attach eyes relative to the head

    return duckGroup;
}
