"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


interface EnergyThreadProps {

  color: string;

}



export function EnergyThread({
  color,
}: EnergyThreadProps) {


  const thread =
    useRef<THREE.Mesh>(null);



  useFrame((state) => {

    if (!thread.current)
      return;



    const time =
      state.clock.elapsedTime;



    // floating energy movement

    thread.current.rotation.x =
      Math.sin(time * 0.45) *
      0.35;



    thread.current.rotation.z =
      Math.cos(time * 0.3) *
      0.25;



    thread.current.rotation.y +=
      0.003;



  });



  return (

    <mesh
      ref={thread}
    >


      <torusGeometry

        args={[
          0.75,
          0.004,
          16,
          220,
        ]}

      />


      <meshStandardMaterial

        color={color}

        emissive={color}

        emissiveIntensity={6}

        toneMapped={false}

      />


    </mesh>

  );

}