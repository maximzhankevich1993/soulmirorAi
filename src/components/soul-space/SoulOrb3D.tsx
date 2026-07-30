"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";

import { SoulCore } from "./SoulCore";
import { SoulAura } from "./SoulAura";
import { EnergyRing } from "./EnergyRing";
import { EnergyThread } from "./EnergyThread";
import { SoulLights } from "./SoulLights";
import { SoulParticles } from "./SoulParticles";
import { CinematicCamera } from "./CinematicCamera";

import { SoulOrbInteraction } from "./SoulOrbInteraction";
import { soulStates } from "./SoulOrbStates";

import { useSoulOrbStore } from "@/store/soul-orb-store";



export function SoulOrb3D() {


  const {
    scale,
    intensity,
  } =
    SoulOrbInteraction();



  const currentState =
    useSoulOrbStore(
      (state) => state.state
    );



  const config =
    soulStates[currentState];



  return (

    <div

      className="
      relative
      h-[320px]
      w-[320px]
      md:h-[380px]
      md:w-[380px]
      "

    >


      {/* cinematic aura background */}

      <div

        className="
        absolute
        inset-0
        rounded-full
        blur-[120px]
        "

        style={{

          background:
            config.color,

          opacity:
            0.15,

        }}

      />



      <Canvas

        camera={{

          position:[
            0,
            0,
            3.5,
          ],

          fov:45,

        }}

      >



        <CinematicCamera />



        <SoulLights

          color={
            config.color
          }

        />



        <Environment

          preset="night"

        />



        <Float

          speed={1.5}

          floatIntensity={0.35}

        >



          <group

            scale={scale}

          >



            <SoulAura

              color={
                config.color
              }

              intensity={
                config.intensity *
                intensity
              }

            />



            <SoulCore

              color={
                config.color
              }

              intensity={
                config.intensity *
                intensity
              }

            />



            <EnergyThread

              color={
                config.emissive
              }

            />



            <EnergyRing

              radius={1.15}

              speed={0.003}

              rotation={[
                0,
                0,
                0,
              ]}

              color={
                config.color
              }

              intensity={
                config.intensity * 2
              }

            />



            <EnergyRing

              radius={1.2}

              speed={-0.002}

              rotation={[
                Math.PI / 2,
                0,
                0,
              ]}

              color={
                config.color
              }

              intensity={
                config.intensity * 2
              }

            />



            <EnergyRing

              radius={1.25}

              speed={0.0015}

              rotation={[
                0,
                Math.PI / 2,
                0,
              ]}

              color={
                config.color
              }

              intensity={
                config.intensity * 2
              }

            />


          </group>


        </Float>



        <SoulParticles />


      </Canvas>


    </div>

  );

}