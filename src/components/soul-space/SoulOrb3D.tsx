"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sphere } from "@react-three/drei";
import { SoulParticles } from "./SoulParticles";
import { SoulOrbInteraction } from "./SoulOrbInteraction";
import {
  soulStates,
  type SoulState,
} from "./SoulOrbStates";
import { useSoulOrbStore } from "@/store/soul-orb-store";
import { useRef } from "react";
import * as THREE from "three";

function Orb({
  state,
}: {
  state: {
    color: string;
    emissive: string;
  };
}) {
  const mesh = useRef<THREE.Mesh>(null);

  const { intensity, scale: interactionScale } =
    SoulOrbInteraction();

  useFrame((stateFrame) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += state.rotation;

    const breathing =
  1 +
  Math.sin(
    stateFrame.clock.elapsedTime * 2
  ) *
  state.breathing;

    const finalScale =
      breathing * interactionScale;

    mesh.current.scale.set(
      finalScale,
      finalScale,
      finalScale
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
          color={state.color}
          emissive={state.emissive}
          emissiveIntensity={intensity}
          roughness={0.15}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export function SoulOrb3D() {
const currentState =
  useSoulOrbStore(
    (state) => state.state
  );

const state =
  soulStates[currentState];
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
          color={state.color}
        />

        <Orb state={state} />
        <SoulParticles />

        <Environment preset="night" />

      </Canvas>

    </div>
  );
}