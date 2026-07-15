"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Sphere,
} from "@react-three/drei";

import { useRef } from "react";
import * as THREE from "three";

import { SoulParticles } from "./SoulParticles";
import { SoulOrbInteraction } from "./SoulOrbInteraction";

import { soulStates } from "./SoulOrbStates";

import { useSoulOrbStore } from "@/store/soul-orb-store";


function OrbRing({
  rotation,
  speed,
  radius,
}: {
  rotation: [number, number, number];
  speed: number;
  radius: number;
}) {

  const ring =
    useRef<THREE.Mesh>(null);


  useFrame((state) => {

    if (!ring.current) return;


    ring.current.rotation.z += speed;


    ring.current.rotation.x =
      rotation[0] +
      Math.sin(
        state.clock.elapsedTime * 0.5
      ) * 0.08;

  });


  return (

    <mesh
      ref={ring}
      rotation={rotation}
    >

      <torusGeometry
        args={[
          radius,
          0.018,
          32,
          200,
        ]}
      />


      <meshPhysicalMaterial

        color="#D6B25E"

        emissive="#D6B25E"

        emissiveIntensity={3}

        metalness={1}

        roughness={0}

        clearcoat={1}

      />

    </mesh>

  );

}



function SoulCore(){

  const core =
    useRef<THREE.Mesh>(null);


  useFrame((state)=>{

    if(!core.current)
      return;


    const time =
      state.clock.elapsedTime;


    const pulse =
      1 +
      Math.sin(time * 2) *
      0.08;


    core.current.scale.setScalar(
      pulse
    );


    core.current.rotation.y =
      time * 0.5;


  });


  return (

    <mesh ref={core}>


      <sphereGeometry
        args={[
          0.38,
          64,
          64,
        ]}
      />


      <meshPhysicalMaterial

        color="#F4F1EA"

        emissive="#D6B25E"

        emissiveIntensity={4}

        roughness={0}

        metalness={0.2}

        transmission={0.5}

        thickness={2}

      />


    </mesh>

  );

}




function EnergyThread(){

  const mesh =
    useRef<THREE.Mesh>(null);


  useFrame((state)=>{

    if(!mesh.current)
      return;


    mesh.current.rotation.y =
      state.clock.elapsedTime * 0.2;


  });


  return (

    <mesh ref={mesh}>


      <torusGeometry

        args={[
          0.85,
          0.008,
          16,
          200,
        ]}

      />


      <meshStandardMaterial

        color="#D6B25E"

        emissive="#D6B25E"

        emissiveIntensity={6}

      />


    </mesh>

  );

}





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
      ) * 0.035;



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

          transmission={0.7}

          thickness={3}

          roughness={0.02}

          metalness={0.15}

          clearcoat={1}

          clearcoatRoughness={0}

          transparent

          opacity={0.35}

          emissive={config.emissive}

          emissiveIntensity={1.5}

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

        <SoulCore />

        <EnergyThread />


        <OrbRing

          rotation={[
            0,
            0,
            0
          ]}

          speed={0.002}

          radius={1.35}

        />



        <OrbRing

          rotation={[
            Math.PI / 2,
            0,
            0
          ]}

          speed={-0.0015}

          radius={1.32}

        />



        <OrbRing

          rotation={[
            0,
            Math.PI / 2,
            0
          ]}

          speed={0.001}

          radius={1.38}

        />



        <SoulParticles />



        <Environment
          preset="night"
        />


      </Canvas>


    </div>

  );

}