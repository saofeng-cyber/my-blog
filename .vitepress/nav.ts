import { DefaultTheme } from "vitepress";

export const navItem: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "前端基础篇",
    items: [
      { text: "Js", link: "/web/js/" },
      { text: "Engine", link: "/web/engine/" },
      { text: "Vue", link: "/web/vue/" },
    ],
  },
  { text: "Ui框架", link: "/ui/" },
  { text: "插件", link: "/plugins/" },
];
