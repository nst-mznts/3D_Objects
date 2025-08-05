import { defineConfig } from "vite";

export default defineConfig({
    base: "/3D_Objects/",
    build: {
        outDir: "dist",
        assetsDir: "assets",
        rollupOptions: {
            external: [],
        },
    },
    resolve: {
        alias: {
            three: "three",
        },
    },
});