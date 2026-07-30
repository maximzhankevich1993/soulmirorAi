"use client";

import { AuthBackground } from "./AuthBackground";
import { AuthLogo } from "./AuthLogo";
import { AuthCard } from "./AuthCard";
import { AuthForm } from "./AuthForm";



export function AuthScreen(){


  return (

    <main

      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-[#050505]
      px-6
      py-12
      text-[#F4F1EA]
      "

    >



      <AuthBackground />





      <div

        className="
        relative
        z-10
        flex
        w-full
        max-w-md
        flex-col
        items-center
        "

      >




        <AuthLogo />





        <div

          className="
          mt-10
          w-full
          "

        >


          <AuthCard>


            <AuthForm />


          </AuthCard>


        </div>




      </div>



    </main>

  );

}