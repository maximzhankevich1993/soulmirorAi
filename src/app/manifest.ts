import type { MetadataRoute } from "next";


export default function manifest(): MetadataRoute.Manifest {

  return {

    name:
      "SoulMirror AI",


    short_name:
      "SoulMirror",


    description:
      "AI-powered self discovery through reflection, dreams and symbolic insights.",


    start_url:
      "/",


    display:
      "standalone",


    background_color:
      "#09090B",


    theme_color:
      "#09090B",


    orientation:
      "portrait",


    lang:
      "en",


    categories: [
      "lifestyle",
      "health",
      "personalization",
    ],


    icons: [

      {
        src:
          "/icon-192.png",

        sizes:
          "192x192",

        type:
          "image/png",
      },


      {
        src:
          "/icon-512.png",

        sizes:
          "512x512",

        type:
          "image/png",
      },


      {
        src:
          "/icon-maskable.png",

        sizes:
          "512x512",

        type:
          "image/png",

        purpose:
          "maskable",
      },

    ],

  };

}