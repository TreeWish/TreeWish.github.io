import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    link: "/",
    icon: "home",

  },
  // {
  //   text: "极简风格",
  //   link: "/simple",
  // },
  // {
  //   text: "文章",
  //   link: "/article/",
  //   icon: "book",
  // },
  {
    text: "编程",
    link: "/code/",
    icon: "code",
  },
  {
    text: "小记",
    link: "/note/",
    icon: "feather",
  },
  {
    text: "读书",
    icon: "book-open",
    prefix: "/read/",
    link: "/read/",
  }
  // { text: "关于我", link: "/intro/" },
  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
]);
