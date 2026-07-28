"use client";

import {
  Points,
  PointMaterial,
} from "@react-three/drei";

import {
  useFrame,
} from "@react-three/fiber";

import {
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";

import {
  useSoulOrbStore,
} from "@/store/soul-orb-store";

import {
  soulStates,
} from "./SoulOrbStates";



export function SoulParticles() {


  const ref =
    useRef<THREE.Points>(null);



  const currentState =
    useSoulOrbStore(
      (state)=>state.state
    );



  const config =
    soulStates[currentState];



  /*
    Generate particles once
  */

  const positions =
    useMemo(()=>{


      const count = 900;


      const array =
        new Float32Array(
          count * 3
        );



      for(
        let i = 0;
        i < count;
        i++
      ){


        const radius =
          1.2 +
          Math.random()
          *
          1.8;



        const angle =
          Math.random()
          *
          Math.PI
          *
          2;



        const height =
          (
            Math.random()
            -
            0.5
          )
          *
          1.8;



        array[i * 3] =
          Math.cos(angle)
          *
          radius;



        array[i * 3 + 1] =
          height;



        array[i * 3 + 2] =
          Math.sin(angle)
          *
          radius;


      }



      return array;


    },[]);





  useFrame((state)=>{


    if(!ref.current)
      return;



    const time =
      state.clock.elapsedTime;



    /*
      Orbital movement
    */


    ref.current.rotation.y =
      time *
      0.08 *
      config.particleSpeed;



    ref.current.rotation.x =
      Math.sin(
        time * 0.3
      )
      *
      0.12;



    /*
      Energy breathing
    */


    const pulse =
      1 +
      Math.sin(
        time * 2
      )
      *
      0.04;



    ref.current.scale.setScalar(
      pulse
    );


  });





  return (

    <Points

      ref={ref}

      positions={positions}

    >


      <PointMaterial

        transparent


        color={
          config.color
        }


        size={
          currentState === "awakening"
          ? 0.045
          : 0.025
        }


        sizeAttenuation


        depthWrite={false}


        blending={
          THREE.AdditiveBlending
        }


      />


    </Points>

  );

}