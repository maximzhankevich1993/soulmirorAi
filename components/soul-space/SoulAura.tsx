"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


interface SoulAuraProps {
  color: string;
  intensity: number;
}


export function SoulAura({
  color,
  intensity,
}: SoulAuraProps) {


  const mesh =
    useRef<THREE.Mesh>(null);



  useFrame((state) => {

    if (!mesh.current)
      return;


    const time =
      state.clock.elapsedTime;



    // slow energy breathing

    const scale =
      1 +
      Math.sin(time * 0.8) *
      0.035;



    mesh.current.scale.setScalar(
      scale
    );



    mesh.current.rotation.y =
      time * 0.08;


    mesh.current.rotation.x =
      Math.sin(time * 0.2) *
      0.1;


  });



  return (

    <mesh
      ref={mesh}
    >


      <sphereGeometry

        args={[
          0.95,
          64,
          64,
        ]}

      />


      <meshPhysicalMaterial

        color={color}

        emissive={color}

        emissiveIntensity={
          intensity * 0.5
        }

        transparent

        opacity={0.08}

        transmission={1}

        roughness={0}

        thickness={1.5}

      />


    </mesh>

  );

}