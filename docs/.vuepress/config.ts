import { defineConfig } from "vuepress/config";
export default defineConfig({
    themeConfig: {
        sidebar: "auto",
        sidebarDepth: 5
    },
    dest: "dist",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "FS-Blog",
            description: "科技改变世界"
        }
    },
    markdown: {
        lineNumbers: true
    }
})