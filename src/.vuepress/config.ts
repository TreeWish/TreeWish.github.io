import { defineUserConfig } from "vuepress"
import theme from "./theme.js"
import { searchProPlugin } from "vuepress-plugin-search-pro"
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "TreeWish",
  description: "欢迎来到我的世界",

  theme,
  // 使用预设主题
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

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
    })
  ],
})
