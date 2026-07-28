"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorAtmosphere() {

  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });


  useEffect(() => {

    const move = (event: MouseEvent) => {

      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

    };


    window.addEventListener(
      "mousemove",
      move
    );


    return () => {
      window.removeEventListener(
        "mousemove",
        move
      );
    };

  }, []);



  return (

    <motion.div

      animate={{
        x: position.x - 180,
        y: position.y - 180,
      }}

      transition={{
        type: "spring",
        stiffness: 80,
        damping: 30,
      }}

      className="
      pointer-events-none
      fixed
      left-0
      top-0
      z-[-1]

      h-[360px]
      w-[360px]

      rounded-full

      bg-gradient-to-br
      from-[#D6B25E]/10
      via-[#8B5CF6]/10
      to-transparent

      blur-[100px]

      hidden
      md:block
      "

    />

  );
}