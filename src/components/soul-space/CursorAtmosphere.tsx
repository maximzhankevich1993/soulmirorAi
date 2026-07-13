"use client";

import { useEffect, useRef } from "react";

interface SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

export function CursorAtmosphere() {

  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const particles: SmokeParticle[] = [];

    function resize() {

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

    }

    function spawn(x:number,y:number){

      particles.push({

        x,
        y,

        vx:(Math.random()-0.5)*0.5,
        vy:(Math.random()-0.5)*0.5,

        size:Math.random()*14+8,

        life:1,

      });

    }

    function click(x:number,y:number){

      for(let i=0;i<20;i++){

        particles.push({

          x,
          y,

          vx:(Math.random()-0.5)*5,
          vy:(Math.random()-0.5)*5,

          size:Math.random()*18+8,

          life:1,

        });

      }

    }

    function mouseMove(e:MouseEvent){

      spawn(
        e.clientX,
        e.clientY
      );

    }

    function mouseClick(e:MouseEvent){

      click(
        e.clientX,
        e.clientY
      );

    }

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    window.addEventListener(
      "mousedown",
      mouseClick
    );

    function animate(){

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      for(let i=particles.length-1;i>=0;i--){

        const p=particles[i];

        p.x+=p.vx;
        p.y+=p.vy;

        p.life-=0.02;

        p.size*=0.992;

        if(p.life<=0){

          particles.splice(i,1);

          continue;

        }

        const gradient=
          ctx.createRadialGradient(

            p.x,
            p.y,
            0,

            p.x,
            p.y,
            p.size

          );

        gradient.addColorStop(
          0,
          `rgba(214,178,94,${p.life*0.12})`
        );

        gradient.addColorStop(
          0.5,
          `rgba(139,92,246,${p.life*0.06})`
        );

        gradient.addColorStop(
          1,
          "rgba(0,0,0,0)"
        );

        ctx.fillStyle=gradient;

        ctx.beginPath();

        ctx.arc(

          p.x,
          p.y,
          p.size,

          0,
          Math.PI*2

        );

        ctx.fill();

      }

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
        mouseMove
      );

      window.removeEventListener(
        "mousedown",
        mouseClick
      );

    };

  },[]);

  return(

    <canvas

      ref={canvasRef}

      className="
      pointer-events-none
      fixed
      inset-0
      z-[15]
      "

    />

  );

}