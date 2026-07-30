"use client";

import {
  useEffect,
  useState,
} from "react";


import {
  createClient,
} from "@supabase/supabase-js";


import {
  DashboardShell,
} from "@/components/dashboard/DashboardShell";



type Usage = {

  soulScan:number;

  dream:number;

  tarot:number;

};




export default function DashboardPage() {


  const [user,setUser] =
    useState<any>(null);



  const [usage,setUsage] =
    useState<Usage>({

      soulScan:0,

      dream:0,

      tarot:0,

    });



  const [loading,setLoading] =
    useState(true);





  const supabase =
    createClient(

      process.env
      .NEXT_PUBLIC_SUPABASE_URL!,

      process.env
      .NEXT_PUBLIC_SUPABASE_ANON_KEY!

    );





  useEffect(()=>{


    async function loadDashboard(){


      try {


        const {

          data:{
            user

          }

        } =
        await supabase
        .auth
        .getUser();





        setUser(user);





        if(!user){

          setLoading(false);

          return;

        }






        const response =
          await fetch(
            "/api/usage"
          );





        if(response.ok){


          const data =
            await response.json();



          setUsage(data);


        }





      } catch(error){


        console.error(
          "Dashboard loading error:",
          error
        );


      } finally {


        setLoading(false);


      }


    }





    loadDashboard();



  },[]);






  if(loading){


    return (

      <main

        className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#050505]
        text-[#F4F1EA]
        "

      >

        <p

          className="
          text-xs
          uppercase
          tracking-[0.5em]
          text-[#D6B25E]
          "

        >

          Entering EON Intelligence

        </p>


      </main>

    );

  }







  if(!user){


    return (

      <main

        className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#050505]
        text-[#F4F1EA]
        "

      >

        <div

          className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-10
          text-center
          "

        >

          <h1

            className="
            font-[family:var(--font-cormorant)]
            text-4xl
            "

          >

            Enter SoulMirror

          </h1>


          <p

            className="
            mt-4
            text-white/50
            "

          >

            Please login to access your
            personal intelligence system.

          </p>


        </div>


      </main>

    );

  }







  return (

    <DashboardShell />

  );


}