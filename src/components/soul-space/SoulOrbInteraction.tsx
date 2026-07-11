"use client";

import { useEffect, useState } from "react";


export function SoulOrbInteraction() {

  const [intensity, setIntensity] =
    useState(1);


  const [scale, setScale] =
    useState(1);



  useEffect(() => {


    function handleMove(
      event: MouseEvent
    ) {


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



      const power =
        Math.max(
          0,
          1 -
          distance * 2
        );



      setIntensity(
        1 +
        power * 2
      );


      setScale(
        1 +
        power * 0.08
      );

    }



    function handleClick(){

      setIntensity(
        4
      );


      setScale(
        1.15
      );


      setTimeout(()=>{

        setIntensity(
          1
        );


        setScale(
          1
        );


      },600);

    }



    window.addEventListener(
      "mousemove",
      handleMove
    );


    window.addEventListener(
      "click",
      handleClick
    );



    return ()=>{

      window.removeEventListener(
        "mousemove",
        handleMove
      );


      window.removeEventListener(
        "click",
        handleClick
      );

    };


  }, []);



  return {

    intensity,

    scale,

  };

}