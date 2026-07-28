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
      state =>
        state.state
    );




  const config =
    soulStates[
      currentState
    ];







  const positions =
    useMemo(()=>{


      const array =
        new Float32Array(
          600 * 3
        );



      for(
        let i = 0;
        i < 600 * 3;
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
          2;



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






    ref.current.rotation.y +=

      0.0015 *
      config.particleSpeed;






    ref.current.rotation.x =

      Math.sin(
        time * 0.25
      )
      *
      0.08;







    const scale =

      1 +
      Math.sin(
        time *
        config.particleSpeed
      )
      *
      config.breathing;





    ref.current.scale.setScalar(
      scale
    );



  });








  return (

    <Points

      ref={ref}

      positions={
        positions
      }

    >


      <PointMaterial

        transparent


        color={
          config.color
        }


        size={

          currentState ===
          "awakening"

          ? 0.045

          :
          
          currentState ===
          "shadow"

          ? 0.018

          :
          
          0.028

        }



        sizeAttenuation



        depthWrite={
          false
        }



        opacity={0.8}


      />


    </Points>

  );

}