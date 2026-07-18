import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";


const footerLinks = [
  {
    title: "Product",
    links: [
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
        label: "Pricing",
        href: "#pricing",
      },
    ],
  },


  {
    title: "EON Ecosystem",
    links: [
      {
        label: "SoulMirror",
        href: "#",
      },
      {
        label: "Memora",
        href: "#",
      },
      {
        label: "Future Self",
        href: "#",
      },
      {
        label: "Parallel",
        href: "#",
      },
    ],
  },


  {
    title: "Company",
    links: [
      {
        label: "About EON AI",
        href: "#",
      },
      {
        label: "Contact",
        href: "#",
      },
      {
        label: "Careers",
        href: "#",
      },
    ],
  },


  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        href: "#",
      },
      {
        label: "Terms of Service",
        href: "#",
      },
    ],
  },
];



export function Footer() {

  return (

    <footer
      className="
      relative
      mt-24
      border-t
      border-white/5
      bg-[#050505]
      "
    >


      <div
        className="
        pointer-events-none
        absolute
        top-0
        left-0
        h-px
        w-full
        bg-gradient-to-r
        from-transparent
        via-[#D6B25E]/40
        to-transparent
        "
      />



      <Container
        className="
        py-20
        "
      >


        <div
          className="
          grid
          gap-12
          lg:grid-cols-12
          "
        >


          {/* BRAND */}


          <div
            className="
            lg:col-span-4
            "
          >

            <Logo />


            <div
              className="
              mt-6
              "
            >

              <p
                className="
                text-sm
                leading-relaxed
                text-[#F4F1EA]/60
                "
              >
                SoulMirror AI is the first personal
                intelligence experience created by EON AI.
                Explore identity, dreams, emotions and
                human evolution through AI.
              </p>


            </div>



            <div
              className="
              mt-6
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#D6B25E]/70
              "
            >
              A product by EON AI
            </div>


          </div>





          {/* LINKS */}


          <div
            className="
            grid
            gap-10
            sm:grid-cols-2
            lg:col-span-8
            lg:grid-cols-4
            "
          >


            {
              footerLinks.map((group)=>(


                <div
                  key={group.title}
                >

                  <h4
                    className="
                    text-sm
                    font-medium
                    text-[#F4F1EA]
                    "
                  >
                    {group.title}
                  </h4>



                  <ul
                    className="
                    mt-5
                    space-y-3
                    "
                  >

                    {
                      group.links.map((link)=>(

                        <li
                          key={link.label}
                        >

                          <Link

                            href={link.href}

                            className="
                            text-sm
                            text-[#F4F1EA]/50
                            transition-all
                            duration-300
                            hover:text-[#D6B25E]
                            "

                          >

                            {link.label}

                          </Link>


                        </li>


                      ))
                    }

                  </ul>


                </div>


              ))
            }


          </div>


        </div>





        {/* BOTTOM */}


        <div
          className="
          mt-16
          flex
          flex-col
          gap-6
          border-t
          border-white/5
          pt-8
          sm:flex-row
          sm:items-center
          sm:justify-between
          "
        >


          <div>

            <p
              className="
              text-xs
              text-[#F4F1EA]/40
              "
            >
              © {new Date().getFullYear()} EON AI.
              All rights reserved.
            </p>


            <p
              className="
              mt-2
              text-xs
              text-[#F4F1EA]/30
              "
            >
              SoulMirror AI is a product by EON AI.
            </p>


          </div>




          <div
            className="
            flex
            gap-6
            text-xs
            text-[#F4F1EA]/40
            "
          >

            <span>
              Conscious AI
            </span>


            <span>
              Personal Intelligence
            </span>


          </div>


        </div>



      </Container>


    </footer>

  );

}