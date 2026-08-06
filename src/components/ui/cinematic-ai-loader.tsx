"use client";

import { useEffect, useState } from "react";

import { AILoading } from "@/components/ui/ai-loading";


interface CinematicAILoaderProps {
  loading: boolean;
  title: string;
}


export function CinematicAILoader({
  loading,
  title,
}: CinematicAILoaderProps) {


  const [visible, setVisible] = useState(false);



  useEffect(() => {

    if (loading) {
      setVisible(true);
    }

  }, [loading]);




  if (!visible) return null;



  return (

    <AILoading

      title={title}

      onComplete={() => {
        setVisible(false);
      }}

    />

  );

}