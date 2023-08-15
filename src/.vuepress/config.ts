import { defineUserConfig } from "vuepress"
import theme from "./theme.js"
import { searchProPlugin } from "vuepress-plugin-search-pro"
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "云中君",
  description: "云中君的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    // searchProPlugin
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      // customFields: [
      //   {
      //     getter: page => page.frontmatter.category,
      //     formatter: "分类：$content",
      //   },
      //   {
      //     getter: page => page.frontmatter.tag,
      //     formatter: "标签：$content",
      //   },
      // ],
    }),
  ],
})
