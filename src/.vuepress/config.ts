import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "小鸡软考",
      description: "小鸡软考",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },

  theme,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索内容',
        },
      },
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
