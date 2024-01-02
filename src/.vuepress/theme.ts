import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "xiaoji",
    url: "https://www.xkxxkx.cn",
    email: "1310744545@qq.com",
  },
  favicon: "/xiaoji.jpg",
  logo: "/xiaoji.jpg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  print: false,
  docsDir: "src",
  iconAssets: "/assets/icon/iconfont.css",
  iconPrefix: "iconfont icon-",
  locales: {
    "/": {
     // navbar
     navbar: zhNavbar,

     // sidebar
     sidebar: zhSidebar,

     footer: "<a href='https://beian.miit.gov.cn/' target='_blank'>黑ICP备20000673号-1</a>",
      // | 主题：<a href='https://vuepress-theme-hope.github.io/v2/' target='_blank'>VuePress Theme Hope</a>
     displayFooter: true,
     breadcrumb:false,

     // page meta
     metaLocales: {
       editLink: "在 GitHub 上编辑此页或修改错误 成为文档贡献者",
     },
    },

    // /**
    //  * Chinese locale config
    //  */
    // "/en/": {
    //   // navbar
    //   navbar: enNavbar,

    //   // sidebar
    //   sidebar: enSidebar,

    //   footer: "Default footer",

    //   displayFooter: true,

    //   metaLocales: {
    //     editLink: "Edit this page on GitHub",
    //   },
    // },
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },
  plugins: {
    // You should generate and use your own comment service
    comment: {
      comment: false,
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
