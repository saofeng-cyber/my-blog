import { DefaultTheme } from "vitepress";
export const sidebarItem: DefaultTheme.Sidebar = {
  "/web/": [
    {
      text: "web",
      items: [
        { text: "Html", link: "/web/html" }, // 文件名
        { text: "Js", link: "/web/js" }, // 文件名
      ],
    },
  ],
  "web/": [
    {
      text: "Examples",
      items: [
        { text: "Markdown Examples", link: "/examples/markdown-examples" },
        { text: "Runtime API Examples", link: "/examples/api-examples" },
      ],
    },
  ],
};
