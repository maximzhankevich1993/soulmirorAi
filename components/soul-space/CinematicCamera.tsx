"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";


interface CinematicCameraProps {
  enabled?: boolean;
  intensity?: number;
}


export function CinematicCamera({
  enabled = true,
  intensity = 1,
}: CinematicCameraProps) {


  const { camera } =
    useThree();


  const targetPosition =
    useRef(
      new THREE.Vector3(
        0,
        0,
        3.5
      )
    );


  const lookTarget =
    useRef(
      new THREE.Vector3(
        0,
        0,
        0
      )
    );



  useFrame((state, delta)=>{


    if(!enabled)
      return;



    const time =
      state.clock.elapsedTime;



    /*
      Cinematic breathing
      Маленькое движение камеры,
      как в кино
    */


    const cinematicZ =
      3.5 +
      Math.sin(
        time * 0.35
      )
      *
      0.08
      *
      intensity;



    const cinematicX =
      Math.sin(
        time * 0.18
      )
      *
      0.05
      *
      intensity;



    const cinematicY =
      Math.cos(
        time * 0.22
      )
      *
      0.04
      *
      intensity;



    targetPosition.current.set(
      cinematicX,
      cinematicY,
      cinematicZ
    );



    /*
      Smooth camera movement
    */


    camera.position.lerp(
      targetPosition.current,
      delta * 1.5
    );



    /*
      Camera focus
    */


    camera.lookAt(
      lookTarget.current
    );


  });



  return null;

}