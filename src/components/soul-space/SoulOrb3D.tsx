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


import {
  SoulParticles,
} from "./SoulParticles";


import {
  SoulOrbInteraction,
} from "./SoulOrbInteraction";


import {
  CinematicCamera,
} from "./CinematicCamera";


import {
  soulStates,
} from "./SoulOrbStates";


import {
  useSoulOrbStore,
} from "@/store/soul-orb-store";





function SoulCore({
  color,
  intensity,
}:{
  color:string;
  intensity:number;
}){


  const mesh =
    useRef<THREE.Mesh>(null);



  useFrame((state)=>{


    if(!mesh.current)
      return;



    const time =
      state.clock.elapsedTime;



    const pulse =
      1 +
      Math.sin(
        time * 2.5
      )
      *
      0.06;



    mesh.current.scale.setScalar(
      pulse
    );



    mesh.current.rotation.y =
      time * 0.45;



    mesh.current.rotation.x =
      Math.sin(
        time * 0.3
      )
      *
      0.15;



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

        emissive={color}

        emissiveIntensity={
          intensity
        }

        roughness={0}

        metalness={0.5}

        transmission={0.8}

        thickness={2}

        clearcoat={1}

      />


    </mesh>

  );

}







function SoulAura({

  color,

  intensity,

}:{

  color:string;

  intensity:number;

}){


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
      *
      0.04

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

        color={color}

        emissive={color}

        emissiveIntensity={
          intensity * 0.5
        }

        transparent

        opacity={0.08}

        transmission={1}

        roughness={0}

      />


    </mesh>

  );

}









function EnergyRing({

  rotation,

  radius,

  speed,

  color,

  intensity,

}:{

  rotation:
  [number,number,number];

  radius:number;

  speed:number;

  color:string;

  intensity:number;

}){


  const ring =
    useRef<THREE.Mesh>(null);



  useFrame((state)=>{


    if(!ring.current)
      return;



    const time =
      state.clock.elapsedTime;



    ring.current.rotation.z +=
      speed;



    ring.current.rotation.y =
      Math.sin(
        time * 0.4
      )
      *
      0.2;



    ring.current.scale.setScalar(

      1 +
      Math.sin(
        time * 2
      )
      *
      0.03

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









function EnergyThread({

  color,

}:{

  color:string;

}){


  const thread =
    useRef<THREE.Mesh>(null);



  useFrame((state)=>{


    if(!thread.current)
      return;



    thread.current.rotation.x =

      Math.sin(
        state.clock.elapsedTime
      )
      *
      0.3;



    thread.current.rotation.y +=
      0.002;



  });





  return (

    <mesh ref={thread}>


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

        emissiveIntensity={5}

      />


    </mesh>

  );

}









export function SoulOrb3D(){



  const {

    scale,

    intensity,

  } =
  SoulOrbInteraction();






  const currentState =

    useSoulOrbStore(
      state =>
        state.state
    );





  const config =

    soulStates[
      currentState
    ];







  return (

    <div

      className="
      relative
      h-[320px]
      w-[320px]
      md:h-[380px]
      md:w-[380px]
      "

    >




      <div

        className="
        absolute
        inset-0
        rounded-full
        blur-[120px]
        "

        style={{

          background:
          config.color,

          opacity:
          0.12,

        }}

      />





      <Canvas

        camera={{

          position:[
            0,
            0,
            3.5,
          ],

          fov:45,

        }}

      >




        <CinematicCamera />




        <ambientLight

          intensity={
            1.2
          }

        />





        <pointLight

          position={[
            3,
            3,
            3,
          ]}

          intensity={
            4
          }

          color={
            config.color
          }

        />





        <pointLight

          position={[
            -3,
            -2,
            2,
          ]}

          intensity={
            3
          }

          color="#8B5CF6"

        />







        <Float

          speed={1.5}

          floatIntensity={0.35}

        >


          <group

            scale={scale}

          >



            <SoulAura

              color={
                config.color
              }

              intensity={
                config.intensity
                *
                intensity
              }

            />




            <SoulCore

              color={
                config.color
              }

              intensity={
                config.intensity
                *
                intensity
              }

            />





            <EnergyThread

              color={
                config.emissive
              }

            />






            <EnergyRing

              radius={1.15}

              speed={0.003}

              rotation={[
                0,
                0,
                0,
              ]}

              color={
                config.color
              }

              intensity={
                config.intensity * 2
              }

            />





            <EnergyRing

              radius={1.2}

              speed={-0.002}

              rotation={[
                Math.PI / 2,
                0,
                0,
              ]}

              color={
                config.color
              }

              intensity={
                config.intensity * 2
              }

            />





            <EnergyRing

              radius={1.25}

              speed={0.0015}

              rotation={[
                0,
                Math.PI / 2,
                0,
              ]}

              color={
                config.color
              }

              intensity={
                config.intensity * 2
              }

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