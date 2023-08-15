import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "云中君",
  description: "云中君的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
