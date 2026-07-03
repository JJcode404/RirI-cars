import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["6e11-102-215-190-137.ngrok-free.app"],
  },
});
