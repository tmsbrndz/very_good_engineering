import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://VGVentures.github.io",
  integrations: [
    starlight({
      favicon: "./public/favicon.png",
      title: "Very Good Engineering",
      head: [
        {
          // Fix theme flickering on page load.
          // See https://scottwillsey.com/theme-flicker/
          tag: "script",
          attrs: {
            type: "text/javascript",
          },
          content: `
              theme = localStorage.getItem("theme") || "light";
              document.documentElement.dataset.theme = theme;
            `,
        },
      ],
      customCss: [
        // Add tailwind base styles:
        "./src/styles/tailwind.css",
        "./src/styles/vgv_brand.css",
        "./src/styles/theme.css",
        "@fontsource/poppins/100.css",
        "@fontsource/poppins/200.css",
        "@fontsource/poppins/300.css",
        "@fontsource/poppins/400.css",
        "@fontsource/poppins/500.css",
        "@fontsource/poppins/600.css",
        "@fontsource/poppins/700.css",
        "@fontsource/poppins/800.css",
        "@fontsource/poppins/900.css",
      ],
      editLink: {
        baseUrl:
          "https://github.com/vgventures/very_good_engineering/edit/main/",
      },
      logo: {
        light: "./src/assets/logos/unicorn_light.png",
        dark: "./src/assets/logos/unicorn_dark.png",
      },
      social: {
        github: "https://github.com/vgventures/very_good_engineering",
      },
      sidebar: [
        {
          label: "Architecture",
          autogenerate: {
            directory: "architecture",
          },
        },
        {
          label: "Automation",
          autogenerate: {
            directory: "automation",
          },
        },
        {
          label: "Code Style",
          autogenerate: {
            directory: "code_style",
          },
        },
        {
          label: "Development",
          autogenerate: {
            directory: "development",
          },
        },
        {
          label: "Examples",
          autogenerate: {
            directory: "examples",
          },
        },
        {
          label: "Internationalization",
          autogenerate: {
            directory: "internationalization",
          },
        },
        {
          label: "Navigation",
          autogenerate: {
            directory: "navigation",
          },
        },
        {
          label: "State Management",
          autogenerate: {
            directory: "state_management",
          },
        },
        {
          label: "Testing",
          autogenerate: {
            directory: "testing",
          },
        },
        {
          label: "Theming",
          autogenerate: {
            directory: "theming",
          },
        },
        {
          label: "Widgets",
          autogenerate: {
            directory: "widgets",
          },
        },
      ],
      components: {
        TwoColumnContent:
          "./src/components/vgv_footer/vgv-two-column-content.astro",
      },
    }),
    react(),
    mdx(),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
