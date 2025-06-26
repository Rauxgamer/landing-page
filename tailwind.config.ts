import type { Config } from "tailwindcss";
import { createPreset } from "tailwindcss-shadcn-ui";

const config: Config = {
  // el preset agrega automáticamente el content + theme + plugin de Shadcn UI
  presets: [createPreset()],
  // tu propio código
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      // aquí tus overrides
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("sonner"),
    // otros plugins tuyos...
  ],
};

export default config;
