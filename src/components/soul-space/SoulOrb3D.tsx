
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Sphere,
} from "@react-three/drei";

import {
  useRef,
} from "react";

import * as THREE from "three";


import { SoulParticles } from "./SoulParticles";
import { SoulOrbInteraction } from "./SoulOrbInteraction";

import {
  soulStates,
} from "./SoulOrbStates";


import {
  useSoulOrbStore,
} from "@/store/soul-orb-store";



function OrbCore() {


  const mesh =
    useRef<THREE.Mesh>(null);


  const material =
    useRef<THREE.MeshPhysicalMaterial>(null);



  const currentState =
    useSoulOrbStore(
      state => state.state
    );


  const config =
    soulStates[currentState];


  const {
    intensity,
    scale,
  } =
    SoulOrbInteraction();



  const color =
    useRef(
      new THREE.Color(
        config.color
      )
    );



  const target =
    new THREE.Color(
      config.color
    );



  useFrame((state)=>{


    if(!mesh.current)
      return;



    const time =
      state.clock.elapsedTime;



    mesh.current.rotation.y =
      time * 0.15;



    const breathe =
      1 +
      Math.sin(
        time * 1.8
      ) *
      0.035;



    mesh.current.scale.setScalar(
      breathe * scale
    );



    color.current.lerp(
      target,
      0.04
    );



    if(material.current){


      material.current.color =
        color.current;



      material.current.emissiveIntensity =
        THREE.MathUtils.lerp(

          material.current.emissiveIntensity,

          config.intensity *
          intensity,

          0.04

        );

    }



  });



  return (

    <Float

      speed={1.5}

      rotationIntensity={0.25}

      floatIntensity={0.35}

    >

      <Sphere

        ref={mesh}

        args={[
          1.05,
          96,
          96,
        ]}

      >

        <meshPhysicalMaterial

          ref={material}

          transmission={0.35}

          thickness={2}

          roughness={0.08}

          metalness={0.35}

          clearcoat={1}

          clearcoatRoughness={0.1}

          emissive={config.emissive}

        />


      </Sphere>


    </Float>

  );

}




export function SoulOrb3D(){


  return (

    <div
      className="
      relative
      h-[300px]
      w-[300px]
      md:h-[340px]
      md:w-[340px]
      "
    >


      <div
        className="
        absolute
        inset-0
        rounded-full
        bg-[#D6B25E]/10
        blur-[90px]
        "
      />


      <Canvas

        camera={{
          position:[
            0,
            0,
            3.5,
          ],
        }}

      >


        <ambientLight
          intensity={0.8}
        />


        <pointLight

          position={[
            2,
            2,
            2,
          ]}

          intensity={2}

          color="#D6B25E"

        />


        <pointLight

          position={[
            -2,
            -1,
            2,
          ]}

          intensity={1}

          color="#8B5CF6"

        />


        <OrbCore />


        <SoulParticles />


        <Environment
          preset="night"
        />


      </Canvas>


    </div>

  );

}

