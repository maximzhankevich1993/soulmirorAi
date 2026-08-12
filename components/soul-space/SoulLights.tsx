"use client";

interface SoulLightsProps {
  color: string;
}

export function SoulLights({
  color,
}: SoulLightsProps) {
  return (
    <>
      {/* Main golden cinematic light */}

      <pointLight
        position={[3, 3, 3]}
        intensity={4.5}
        color={color}
        distance={8}
      />

      {/* Purple secondary atmosphere */}

      <pointLight
        position={[-3, -2, 2]}
        intensity={3}
        color="#8B5CF6"
        distance={7}
      />

      {/* Soft front illumination */}

      <pointLight
        position={[0, 1, 4]}
        intensity={1.5}
        color="#F4F1EA"
        distance={6}
      />

      {/* Ambient cinematic fill */}

      <ambientLight intensity={0.8} />
    </>
  );
}