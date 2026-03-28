// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Alte Haas Grotesk",
    cssVariable: "--font-alte-haas-grotesk",
    options: {
      variants: [
        {
          src: ['./src/assets/fonts/AlteHaasGroteskRegular.ttf'],
          weight: 'normal',
          style: 'normal'
        },
        {
          src: ['./src/assets/fonts/AlteHaasGroteskBold.ttf'],
          weight: 'bold',
          style: 'normal'
        }
      ]
    }
  }]

});
