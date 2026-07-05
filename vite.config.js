import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["422a-102-140-196-11.ngrok-free.app"],
  },
  preview: {
    allowedHosts: ["riri-cars.onrender.com"],
  },
});
