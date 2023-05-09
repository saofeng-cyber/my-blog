import { DefaultTheme } from "vitepress";

export const navItem: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "前端基础篇",
    items: [
      { text: "Html", link: "/web/html" },
      { text: "Js", link: "/web/js" },
    ],
  },
  { text: "Examples", link: "/examples/markdown-examples" },
  { text: "Ui框架", link: "/ui/" },
  { text: "插件", link: "/plugins/" },
];
