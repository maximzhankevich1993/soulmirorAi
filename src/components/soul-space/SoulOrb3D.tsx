"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
} from "@react-three/drei";

import {
  useRef,
} from "react";

import * as THREE from "three";

import { SoulParticles } from "./SoulParticles";
import { SoulOrbInteraction } from "./SoulOrbInteraction";
import { soulStates } from "./SoulOrbStates";

import {
  useSoulOrbStore,
} from "@/store/soul-orb-store";



function SoulCore() {

  const mesh =
    useRef<THREE.Mesh>(null);


  useFrame((state)=>{

    if(!mesh.current)
      return;


    const time =
      state.clock.elapsedTime;


    const pulse =
      1 +
      Math.sin(time * 2.5) * 0.08;


    mesh.current.scale.setScalar(
      pulse
    );


    mesh.current.rotation.y =
      time * 0.5;


  });


  return (

    <mesh ref={mesh}>


      <icosahedronGeometry

        args={[
          0.42,
          5,
        ]}

      />


      <meshPhysicalMaterial

        color="#F4F1EA"

        emissive="#D6B25E"

        emissiveIntensity={4}

        roughness={0}

        metalness={0.4}

        transmission={0.5}

        thickness={2}

        clearcoat={1}

      />


    </mesh>

  );

}





function EnergyRing({

  rotation,

  speed,

  radius,

}:{

  rotation:
    [number,number,number];

  speed:number;

  radius:number;

}){


  const ring =
    useRef<THREE.Mesh>(null);



  useFrame((state)=>{


    if(!ring.current)
      return;


    const time =
      state.clock.elapsedTime;



    const pulse =
      1 +
      Math.sin(
        time * 1.8
      ) * 0.035;



    ring.current.scale.setScalar(
      pulse
    );


    ring.current.rotation.z +=
      speed;


    ring.current.rotation.y =
      Math.sin(
        time * 0.4
      ) * 0.15;



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
          24,
          160,
        ]}

      />


      <meshPhysicalMaterial

        color="#D6B25E"

        emissive="#D6B25E"

        emissiveIntensity={5}

        metalness={1}

        roughness={0}

        clearcoat={1}

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


    mesh.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime
      ) * 0.3;



    mesh.current.rotation.y +=
      0.003;



  });



  return (

    <mesh ref={mesh}>


      <torusGeometry

        args={[
          0.75,
          0.004,
          12,
          200,
        ]}

      />


      <meshStandardMaterial

        color="#8B5CF6"

        emissive="#8B5CF6"

        emissiveIntensity={5}

      />


    </mesh>

  );

}






function SoulAura(){


  const mesh =
    useRef<THREE.Mesh>(null);



  useFrame((state)=>{


    if(!mesh.current)
      return;


    const time =
      state.clock.elapsedTime;



    mesh.current.rotation.y =
      time * 0.1;



    mesh.current.scale.setScalar(
      1 +
      Math.sin(time) * 0.05
    );


  });



  return (

    <mesh ref={mesh}>


      <sphereGeometry

        args={[
          0.95,
          64,
          64,
        ]}

      />


      <meshPhysicalMaterial

        color="#D6B25E"

        emissive="#D6B25E"

        emissiveIntensity={1}

        transparent

        opacity={0.08}

        roughness={0}

        transmission={1}

      />


    </mesh>

  );

}






export function SoulOrb3D(){


  const {
    scale,
  } =
    SoulOrbInteraction();



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
        blur-[100px]
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

          intensity={1}

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



        <pointLight

          position={[
            -3,
            -2,
            2,
          ]}

          intensity={2}

          color="#8B5CF6"

        />




        <Float

          speed={1.5}

          floatIntensity={0.4}

        >


          <group

            scale={scale}

          >


            <SoulAura />


            <SoulCore />


            <EnergyThread />


            <EnergyRing

              rotation={[
                0,
                0,
                0
              ]}

              speed={0.003}

              radius={1.15}

            />


            <EnergyRing

              rotation={[
                Math.PI / 2,
                0,
                0
              ]}

              speed={-0.002}

              radius={1.18}

            />


            <EnergyRing

              rotation={[
                0,
                Math.PI / 2,
                0
              ]}

              speed={0.0015}

              radius={1.22}

            />


          </group>


        </Float>




        <SoulParticles />



        <Environment

          preset="night"

        />


      </Canvas>


    </div>

  );

}