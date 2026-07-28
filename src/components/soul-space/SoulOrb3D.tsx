"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Environment,
  Float,
} from "@react-three/drei";

import {
  useRef,
} from "react";

import * as THREE from "three";


import { SoulParticles } from "./SoulParticles";
import { SoulPulse } from "./SoulPulse";
import { SoulOrbInteraction } from "./SoulOrbInteraction";


function SoulCore() {

  const mesh =
    useRef<THREE.Mesh>(null);


  useFrame((state)=>{

    if(!mesh.current)
      return;


    const time =
      state.clock.elapsedTime;


    mesh.current.rotation.y =
      time * 0.35;


    const pulse =
      1 +
      Math.sin(time * 2) * 0.04;


    mesh.current.scale.setScalar(
      pulse
    );


  });



  return (

    <mesh ref={mesh}>

      <icosahedronGeometry
        args={[
          0.43,
          4,
        ]}
      />


      <meshPhysicalMaterial

        color="#F4F1EA"

        emissive="#D6B25E"

        emissiveIntensity={5}

        roughness={0}

        metalness={0.25}

        transmission={0.8}

        thickness={3}

        clearcoat={1}

        clearcoatRoughness={0}

      />

    </mesh>

  );

}




function EnergyRing({
  rotation,
  radius,
  speed,
}:{
  rotation:
  [number,number,number];

  radius:number;

  speed:number;
}){


  const ring =
    useRef<THREE.Mesh>(null);



  useFrame((state)=>{


    if(!ring.current)
      return;


    const time =
      state.clock.elapsedTime;


    ring.current.rotation.z += speed;


    ring.current.rotation.y =
      Math.sin(time * 0.5)
      *0.25;


    const scale =
      1 +
      Math.sin(time * 2)
      *0.025;


    ring.current.scale.setScalar(
      scale
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
          200,
        ]}

      />


      <meshStandardMaterial

        color="#D6B25E"

        emissive="#D6B25E"

        emissiveIntensity={6}

        metalness={1}

        roughness={0}

      />

    </mesh>

  );

}





function EnergyThread(){

  const mesh =
    useRef<THREE.Mesh>(null);


  useFrame(()=>{

    if(!mesh.current)
      return;


    mesh.current.rotation.y +=
      0.002;


  });



  return (

    <mesh ref={mesh}>

      <torusGeometry

        args={[
          0.72,
          0.006,
          20,
          180,
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
      time * 0.08;


    mesh.current.scale.setScalar(
      1 +
      Math.sin(time)
      *0.04
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

        emissiveIntensity={1.5}

        transparent

        opacity={0.09}

        roughness={0}

        transmission={1}

      />


    </mesh>

  );

}





function CameraBreathing(){

  useFrame(({camera,clock})=>{


    const t =
      clock.elapsedTime;


    camera.position.z =
      3.5 +
      Math.sin(t*0.4)
      *0.08;


  });


  return null;

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
      h-[320px]
      w-[320px]

      md:h-[360px]
      md:w-[360px]
      "

    >


      <div

        className="
        absolute
        inset-0

        rounded-full

        bg-[#D6B25E]/20

        blur-[120px]

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

        dpr={[
          1,
          2,
        ]}

      >


        <CameraBreathing />



        <ambientLight
          intensity={1.2}
        />


        <pointLight

          position={[
            3,
            3,
            3,
          ]}

          intensity={4}

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

          floatIntensity={0.35}

        >


          <group scale={scale}>


            <SoulAura />


            <SoulPulse />


            <SoulCore />


            <EnergyThread />


            <EnergyRing

              rotation={[
                0,
                0,
                0,
              ]}

              radius={1.15}

              speed={0.003}

            />


            <EnergyRing

              rotation={[
                Math.PI/2,
                0,
                0,
              ]}

              radius={1.18}

              speed={-0.002}

            />


            <EnergyRing

              rotation={[
                0,
                Math.PI/2,
                0,
              ]}

              radius={1.22}

              speed={0.0015}

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