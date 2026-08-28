'use client';

import { Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';

function StarField() {
  const group = useRef<Group>(null);

  useFrame(({ pointer }, delta) => {
    if (group.current == null) return;

    const easing = Math.min(delta * 0.7, 0.04);
    group.current.rotation.x += (pointer.y * 0.035 - group.current.rotation.x) * easing;
    group.current.rotation.y += (pointer.x * 0.05 - group.current.rotation.y) * easing;
  });

  return (
    <group ref={group}>
      <Stars radius={70} depth={38} count={1100} factor={2.4} saturation={0.15} fade speed={0.25} />
    </group>
  );
}

export default function AuroraStars() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 65 }}
      dpr={[1, 1.25]}
      frameloop='always'
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      fallback={<div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(198,161,91,0.08),transparent_28rem)]' />}
    >
      <StarField />
    </Canvas>
  );
}
