import { defineConfig } from "vite";
import path from "path";

export default defineConfig(async () => {
  const reactPlugin = (await import("@vitejs/plugin-react")).default;

  return {
    base: "/Giraffy-Modal-Manager-Demo/",
    plugins: [reactPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
