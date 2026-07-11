"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useSoulOrbStore } from "@/store/soul-orb-store";
import { soulStates } from "./SoulOrbStates";


export function SoulParticles() {

  const ref =
    useRef<THREE.Points>(null);


  const currentState =
    useSoulOrbStore(
      (state)=>state.state
    );


  const config =
    soulStates[currentState];


  const positions =
    new Float32Array(
      400 * 3
    );


  for (
    let i = 0;
    i < 400 * 3;
    i++
  ) {

    positions[i] =
      (Math.random() - 0.5) * 5;

  }



  useFrame((state)=>{

    if(!ref.current) return;


    ref.current.rotation.y +=
      0.002 *
      config.particleSpeed;


    ref.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime
      ) * 0.05;

  });



  return (

    <Points
      ref={ref}
      positions={positions}
    >

      <PointMaterial

        transparent

        color={config.color}

        size={
          currentState === "awakening"
            ? 0.035
            : 0.02
        }

        sizeAttenuation

        depthWrite={false}

      />

    </Points>

  );
}