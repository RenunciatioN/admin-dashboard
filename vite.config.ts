import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            generateScopedName: '[name]_[local]_[hash:base64:5]'
    
        }
    },
    resolve: {
        alias: {
            components: "/src/components",
            services: "/src/services",
            hooks: "/src/hooks",
            store: "/src/store",
            assets: "/src/assets",
            utils: "/src/utils",
            sсreens: "/src/components/sсreens",
            types: "/src/types",
            shared: "/src/shared",
            constants: "/src/constants",
            pages: "/src/pages",
            providers: "/src/providers",
            api: "/src/api",
        },
    },
});


