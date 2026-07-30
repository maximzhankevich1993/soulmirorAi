"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


interface EnergyRingProps {

  rotation:
    [number, number, number];

  radius: number;

  speed: number;

  color: string;

  intensity: number;

}



export function EnergyRing({

  rotation,

  radius,

  speed,

  color,

  intensity,

}: EnergyRingProps) {


  const ring =
    useRef<THREE.Mesh>(null);



  useFrame((state) => {

    if (!ring.current)
      return;



    const time =
      state.clock.elapsedTime;



    // cinematic rotation

    ring.current.rotation.z +=
      speed;



    ring.current.rotation.y =
      Math.sin(time * 0.35) *
      0.25;



    // energy breathing

    ring.current.scale.setScalar(

      1 +
      Math.sin(time * 1.8) *
      0.025

    );


  });



  return (

    <mesh

      ref={ring}

      rotation={rotation}

    >


      <torusGeometry

        args={[
          radius,
          0.012,
          32,
          220,
        ]}

      />


      <meshPhysicalMaterial

        color={color}

        emissive={color}

        emissiveIntensity={
          intensity
        }

        metalness={1}

        roughness={0}

        clearcoat={1}

      />


    </mesh>

  );

}