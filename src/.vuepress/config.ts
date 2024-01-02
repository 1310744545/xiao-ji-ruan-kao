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
  shouldPrefetch: false,
  shouldPreload:false,
  head:[
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?009c7dab6698624482761f1d2205f057";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
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
