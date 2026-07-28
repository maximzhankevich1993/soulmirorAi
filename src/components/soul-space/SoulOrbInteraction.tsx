"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";


export function SoulOrbInteraction() {


  const targetIntensity =
    useRef(1);


  const targetScale =
    useRef(1);



  const [intensity, setIntensity] =
    useState(1);



  const [scale, setScale] =
    useState(1);





  useEffect(()=>{


    let animationFrame:number;



    function update(){


      setIntensity((value)=>{

        return value +
          (
            targetIntensity.current -
            value
          )
          *
          0.08;

      });



      setScale((value)=>{

        return value +
          (
            targetScale.current -
            value
          )
          *
          0.08;

      });



      animationFrame =
        requestAnimationFrame(
          update
        );

    }



    update();




    function handlePointer(
      event: PointerEvent
    ){


      const x =
        event.clientX /
        window.innerWidth;


      const y =
        event.clientY /
        window.innerHeight;




      const distance =
        Math.sqrt(

          Math.pow(
            x - 0.5,
            2
          )

          +

          Math.pow(
            y - 0.5,
            2
          )

        );




      const presence =
        Math.max(
          0,
          1 -
          distance * 2.5
        );




      targetIntensity.current =
        1 +
        presence * 1.8;




      targetScale.current =
        1 +
        presence * 0.06;


    }





    function handleInteraction(){


      targetIntensity.current =
        5;



      targetScale.current =
        1.18;



      setTimeout(()=>{


        targetIntensity.current =
          1;



        targetScale.current =
          1;



      },700);


    }





    window.addEventListener(
      "pointermove",
      handlePointer
    );



    window.addEventListener(
      "pointerdown",
      handleInteraction
    );




    return ()=>{


      cancelAnimationFrame(
        animationFrame
      );



      window.removeEventListener(
        "pointermove",
        handlePointer
      );



      window.removeEventListener(
        "pointerdown",
        handleInteraction
      );


    };


  },[]);





  return {

    intensity,

    scale,

  };

}