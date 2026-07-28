"use client";

import {
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  useRef,
} from "react";

import * as THREE from "three";



export function CinematicCamera() {


  const {
    camera,
  } = useThree();



  const target =
    useRef(
      new THREE.Vector3(
        0,
        0,
        0
      )
    );



  const basePosition =
    useRef(
      new THREE.Vector3(
        0,
        0,
        3.5
      )
    );





  useFrame((state)=>{


    const time =
      state.clock.elapsedTime;





    /*
      Cinematic breathing movement
    */


    const cinematicX =
      Math.sin(
        time * 0.18
      )
      *
      0.08;



    const cinematicY =
      Math.cos(
        time * 0.22
      )
      *
      0.05;





    const cinematicZ =
      3.5 +
      Math.sin(
        time * 0.15
      )
      *
      0.08;







    camera.position.lerp(

      new THREE.Vector3(

        basePosition.current.x
          +
        cinematicX,


        basePosition.current.y
          +
        cinematicY,


        cinematicZ

      ),

      0.025

    );








    /*
      Smooth camera focus
    */


    camera.lookAt(
      target.current
    );



  });





  return null;

}