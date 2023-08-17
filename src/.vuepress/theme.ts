import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { getDirname, path } from "@vuepress/utils";
 
const __dirname = getDirname(import.meta.url);
export default hopeTheme({
  hostname: "https://treewish.github.io",

  author: {
    name: "TreeWish",
    url: "https://github.com/treewish",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "https://github.com/TreeWish/treewish.github.io",

  docsDir: "src",

  // navbar
  navbar,

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  // sidebar
  sidebar,

  footer: '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a>',
  copyright: "MIT 协议 | 版权所有 © 2023 TreeWish",

  displayFooter: true,
  // 主题模式
  darkmode: 'toggle',
  // 全屏
  fullscreen: true,

  blog: {
    avatar: '/assets/images/avatar.jpg',
    name: 'TreeWish',
    description: "始于前端，不止于前端",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/treewish",
      Gitee: "https://gitee.com/treewish",
       // 一个自定义媒体 JueJin
      JueJin: [
        // 链接
        "https://juejin.cn/user/1556564196462797/",
        // 图标地址
        path.resolve(__dirname, "./public/assets/icon/juejin.svg"),
      ],
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 添加其他博客类型
  blogLocales: {
    slide: "幻灯片",
  },

  plugins: {
    blog: {
      type: [
        {
          key: "slide",
          filter: (page) => page.frontmatter.layout === "Slide",
        },
      ],
    },

    // 开启后复制时自动生成一段版权信
    copyright: true,

    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://waline-blog-78wa1xvod-treewish.vercel.app/",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
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
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
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
}, {
  custom: true
});
