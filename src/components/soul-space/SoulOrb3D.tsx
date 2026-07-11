"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sphere } from "@react-three/drei";
import { SoulParticles } from "./SoulParticles";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += 0.003;

    const scale =
      1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;

    mesh.current.scale.set(
      scale,
      scale,
      scale
    );
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={0.6}
    >
      <Sphere
        ref={mesh}
        args={[1.35, 128, 128]}
      >
        <meshStandardMaterial
          color="#D6B25E"
          emissive="#8B5CF6"
          emissiveIntensity={1.8}
          roughness={0.15}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export function SoulOrb3D() {
  return (
    <div className="h-[420px] w-[420px]">

      <Canvas
        camera={{
          position: [0, 0, 4],
        }}
      >

        <ambientLight intensity={1.5} />

        <pointLight
          position={[3, 3, 3]}
          intensity={3}
          color="#D6B25E"
        />

        <Orb />
        <SoulParticles />

        <Environment preset="night" />

      </Canvas>

    </div>
  );
}