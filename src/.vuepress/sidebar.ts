import { sidebar } from "vuepress-theme-hope";
// structure
export default sidebar({
  "/code/": "structure",

  "/note/": "structure",

  // fallback
  "/": [
    "" /* / */,
    "contact" /* /contact.html */,
    "about" /* /about.html */,
  ],
});
