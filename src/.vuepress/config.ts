import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "云中君",
  description: "云中君的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    // docsearch
    docsearchPlugin({
      // 你的选项
      appId: 'KRWRG4KAI7',
      apiKey: "8185247598d9ec0481b6e261a74d95ab",
      indexName: 'KRWRG4KAI7'
    }),
  ]
});
