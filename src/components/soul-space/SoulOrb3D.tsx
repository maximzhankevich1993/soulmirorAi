"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Sphere,
} from "@react-three/drei";

import { SoulParticles } from "./SoulParticles";
import { SoulOrbInteraction } from "./SoulOrbInteraction";
import {
  soulStates,
} from "./SoulOrbStates";

import {
  useSoulOrbStore,
} from "@/store/soul-orb-store";

import {
  useRef,
} from "react";

import * as THREE from "three";


function Orb() {

  const mesh =
    useRef<THREE.Mesh>(null);


  const material =
    useRef<THREE.MeshStandardMaterial>(null);


  const currentState =
    useSoulOrbStore(
      (state)=>state.state
    );


  const config =
    soulStates[currentState];


  const {
    intensity,
    scale: interactionScale,
  } =
    SoulOrbInteraction();



  const currentColor =
    useRef(
      new THREE.Color(
        config.color
      )
    );


  const targetColor =
    new THREE.Color(
      config.color
    );



  useFrame((state)=>{


    if(!mesh.current)
      return;



    // плавное вращение

    mesh.current.rotation.y +=
      config.rotation;



    // дыхание

    const breathing =
      1 +
      Math.sin(
        state.clock.elapsedTime * 2
      )
      *
      config.breathing;



    mesh.current.scale.set(
      breathing *
      interactionScale,

      breathing *
      interactionScale,

      breathing *
      interactionScale
    );



    // плавная смена цвета

    currentColor.current.lerp(
      targetColor,
      0.03
    );


    if(material.current){

      material.current.color =
        currentColor.current;


      material.current.emissiveIntensity =
        THREE.MathUtils.lerp(
          material.current.emissiveIntensity,
          config.intensity *
          intensity,
          0.05
        );

    }


  });



  return (

    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={0.6}
    >

      <Sphere
        ref={mesh}
        args={[
          1.35,
          128,
          128,
        ]}
      >

        <meshStandardMaterial

          ref={material}

          emissive={config.emissive}

          roughness={0.15}

          metalness={0.8}

        />


      </Sphere>


    </Float>

  );

}




export function SoulOrb3D(){

  return (

    <div
      className="
      h-[420px]
      w-[420px]
      "
    >

      <Canvas
        camera={{
          position:[
            0,
            0,
            4
          ],
        }}
      >


        <ambientLight
          intensity={1.5}
        />


        <pointLight

          position={[
            3,
            3,
            3,
          ]}

          intensity={3}

          color="#D6B25E"

        />


        <Orb />

        <SoulParticles />


        <Environment
          preset="night"
        />


      </Canvas>


    </div>

  );

}