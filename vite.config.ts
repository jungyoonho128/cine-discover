import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// base는 GitHub Pages 배포 시 저장소 이름으로 변경: '/cine-discover/'
export default defineConfig({
  plugins: [react()],
  base: "/cine-discover/",
});
