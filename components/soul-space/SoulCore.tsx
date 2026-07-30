"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


interface SoulCoreProps {
  color: string;
  intensity: number;
}


export function SoulCore({
  color,
  intensity,
}: SoulCoreProps) {


  const mesh =
    useRef<THREE.Mesh>(null);



  useFrame((state) => {

    if (!mesh.current)
      return;


    const time =
      state.clock.elapsedTime;



    // cinematic breathing pulse

    const pulse =
      1 +
      Math.sin(time * 2.2) *
      0.045;



    mesh.current.scale.setScalar(
      pulse
    );



    // slow rotation

    mesh.current.rotation.y =
      time * 0.35;



    mesh.current.rotation.x =
      Math.sin(time * 0.25) *
      0.15;


  });



  return (

    <mesh
      ref={mesh}
    >


      <icosahedronGeometry

        args={[
          0.42,
          5,
        ]}

      />


      <meshPhysicalMaterial

        color="#F4F1EA"

        emissive={color}

        emissiveIntensity={
          intensity
        }

        roughness={0}

        metalness={0.35}

        transmission={0.85}

        thickness={2}

        clearcoat={1}

        clearcoatRoughness={0}

      />


    </mesh>

  );

}