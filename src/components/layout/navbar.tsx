"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { AuthWidget } from "@/components/auth/auth-widget";


const navigation = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Dreams",
    href: "#dreams",
  },
  {
    label: "Journal",
    href: "#journal",
  },
  {
    label: "Ecosystem",
    href: "#ecosystem",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];


export function Navbar() {

  const [
    scrolled,
    setScrolled,
  ] = useState(false);


  useEffect(()=>{

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 20
      );

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


  },[]);



  return (

    <header

      className={`
        fixed
        top-0
        z-50
        w-full
        transition-all
        duration-500
        border-b

        ${
          scrolled

          ?

          "
          bg-[#050505]/80
          backdrop-blur-3xl
          border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          "

          :

          "
          bg-transparent
          border-transparent
          "

        }

      `}

    >


      <Container>


        <div
          className="
          flex
          h-20
          items-center
          justify-between
          "
        >



          <Link
            href="/"
            className="
            flex
            items-center
            gap-4
            "
          >


            <Logo />


            <div
              className="
              hidden
              border-l
              border-white/10
              pl-4
              sm:block
              "
            >

              <p
                className="
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-[#D6B25E]
                "
              >
                EON AI
              </p>


              <p
                className="
                text-[10px]
                text-white/40
                "
              >
                Intelligence Ecosystem
              </p>


            </div>


          </Link>





          <nav
            className="
            hidden
            items-center
            gap-8
            lg:flex
            "
          >

            {
              navigation.map((item)=>(

                <Link

                  key={item.label}

                  href={item.href}

                  scroll={false}

                  className="
                  group
                  relative
                  text-sm
                  text-white/60
                  transition-all
                  hover:text-white
                  "

                >

                  {item.label}


                  <span

                    className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-[#D6B25E]
                    transition-all
                    duration-300
                    group-hover:w-full
                    "

                  />


                </Link>

              ))
            }


          </nav>





          <div
            className="
            hidden
            items-center
            gap-4
            lg:flex
            "
          >



            <Link

              href="#soul-scan"

              scroll={false}

              className="
              rounded-2xl
              border
              border-[#D6B25E]/30
              bg-gradient-to-r
              from-[#D6B25E]/10
              to-[#8B5CF6]/10
              px-5
              py-2.5
              text-sm
              text-[#F4F1EA]
              transition-all
              hover:border-[#D6B25E]/60
              hover:shadow-[0_0_30px_rgba(214,178,94,0.15)]
              "

            >

              Start Experience


            </Link>



            <AuthWidget />


          </div>




          <MobileNav />


        </div>


      </Container>




      <div

        className="
        pointer-events-none
        absolute
        bottom-0
        left-0
        h-px
        w-full
        bg-gradient-to-r
        from-transparent
        via-[#D6B25E]/30
        to-transparent
        "

      />


    </header>

  );

}