"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { useSoulOrbStore } from "@/store/soul-orb-store";
import { SoulOrbInteraction } from "./SoulOrbInteraction";
import { soulStates } from "./SoulOrbStates";

function SoulCoreVisual({
  color,
  intensity,
  scale,
}: {
  color: string;
  intensity: number;
  scale: number;
}) {
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    const pulse =
      1 +
      Math.sin(time * 1.4) * 0.035;

    if (coreRef.current) {
      coreRef.current.scale.setScalar(
        scale * pulse
      );
    }

    if (glowRef.current) {
      const glowPulse =
        1 +
        Math.sin(time * 1.1) * 0.06;

      glowRef.current.scale.setScalar(
        scale * glowPulse
      );
    }
  });

  return (
    <group>
      {/* Soft outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry
          args={[0.82, 64, 64]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.045 * intensity}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Main core */}
      <mesh ref={coreRef}>
        <sphereGeometry
          args={[0.48, 64, 64]}
        />

        <meshStandardMaterial
          color="#090909"
          emissive={color}
          emissiveIntensity={0.8 * intensity}
          roughness={0.18}
          metalness={0.35}
        />
      </mesh>

      {/* Inner light */}
      <pointLight
        color={color}
        intensity={1.8 * intensity}
        distance={2.8}
        decay={2}
      />
    </group>
  );
}

function EnergyRing({
  radius,
  color,
  rotation,
  speed,
  opacity,
}: {
  radius: number;
  color: string;
  rotation: [number, number, number];
  speed: number;
  opacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.x +=
      speed;

    ref.current.rotation.z +=
      speed * 0.35;
  });

  return (
    <mesh
      ref={ref}
      rotation={rotation}
    >
      <torusGeometry
        args={[
          radius,
          0.006,
          12,
          160,
        ]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function OrbScene({
  color,
  intensity,
  scale,
}: {
  color: string;
  intensity: number;
  scale: number;
}) {
  return (
    <>
      {/* Extremely soft light */}
      <ambientLight
        intensity={0.08}
      />

      <pointLight
        position={[0, 0, 2]}
        color={color}
        intensity={2 * intensity}
        distance={5}
        decay={2}
      />

      {/* Core */}
      <SoulCoreVisual
        color={color}
        intensity={intensity}
        scale={scale}
      />

      {/* Minimal energy structure */}
      <EnergyRing
        radius={0.82}
        color={color}
        rotation={[
          Math.PI / 3,
          0,
          0,
        ]}
        speed={0.0015}
        opacity={0.28 * intensity}
      />

      <EnergyRing
        radius={0.94}
        color={color}
        rotation={[
          0,
          Math.PI / 2.5,
          0,
        ]}
        speed={-0.001}
        opacity={0.16 * intensity}
      />
    </>
  );
}

export function SoulOrb3D() {
  const { scale, intensity } =
    SoulOrbInteraction();

  const currentState =
    useSoulOrbStore(
      (state) => state.state
    );

  const config =
    soulStates[currentState];

  return (
    <div
      className="
        relative
        h-[280px]
        w-[280px]
        sm:h-[320px]
        sm:w-[320px]
        md:h-[360px]
        md:w-[360px]
      "
    >
      {/* Atmospheric glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[180px]
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[100px]
        "
        style={{
          background: config.color,
          opacity: 0.12,
        }}
      />

      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
        camera={{
          position: [0, 0, 3.2],
          fov: 42,
        }}
      >
        <OrbScene
          color={config.color}
          intensity={
            config.intensity *
            intensity
          }
          scale={scale}
        />
      </Canvas>
    </div>
  );
}