"use client";

import { useEffect, useRef } from "react";


export function GlobalParticles() {

  const canvas =
    useRef<HTMLCanvasElement>(null);


  useEffect(()=>{

    const el = canvas.current;

    if(!el) return;


    const ctx =
      el.getContext("2d");

    if(!ctx) return;


    let width =
      window.innerWidth;

    let height =
      window.innerHeight;


    el.width = width;
    el.height = height;


    const mouse = {
      x: width / 2,
      y: height / 2,
    };


    const particles =
      Array.from(
        {length:120},
        ()=>({

          x:Math.random()*width,
          y:Math.random()*height,

          vx:(Math.random()-0.5)*0.3,
          vy:(Math.random()-0.5)*0.3,

          size:
            Math.random()*2+0.5,

        })
      );



    function resize(){

      width =
        window.innerWidth;

      height =
        window.innerHeight;


      el.width =
        width;

      el.height =
        height;

    }



    function move(
      e:MouseEvent
    ){

      mouse.x =
        e.clientX;

      mouse.y =
        e.clientY;

    }



    window.addEventListener(
      "resize",
      resize
    );


    window.addEventListener(
      "mousemove",
      move
    );



    function animate(){

      ctx.clearRect(
        0,
        0,
        width,
        height
      );



      particles.forEach(p=>{


        const dx =
          p.x - mouse.x;


        const dy =
          p.y - mouse.y;


        const distance =
          Math.sqrt(
            dx*dx+dy*dy
          );



        if(distance < 140){

          p.x +=
            dx / distance * 1.8;

          p.y +=
            dy / distance * 1.8;

        }


        p.x += p.vx;
        p.y += p.vy;



        if(
          p.x < 0 ||
          p.x > width
        )
          p.vx *= -1;


        if(
          p.y < 0 ||
          p.y > height
        )
          p.vy *= -1;



        ctx.beginPath();


        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI*2
        );


        ctx.fillStyle =
          "rgba(214,178,94,0.7)";


        ctx.fill();


      });


      requestAnimationFrame(
        animate
      );

    }


    animate();



    return ()=>{

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        move
      );

    };


  },[]);



  return (

    <canvas

      ref={canvas}

      className="
      pointer-events-none
      fixed
      inset-0
      z-0
      "

    />

  );

}