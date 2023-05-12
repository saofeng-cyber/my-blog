import { DefaultTheme } from "vitepress";
export const sidebarItem: DefaultTheme.Sidebar = {
  "/web/": [
    {
      text: "JavaScript内功修炼",
      items: [
        { text: "学习目标", link: "/web/js/" }, // 文件名
      ],
    },
    {
      text: "前端⼯程化实战",
      items: [
        { text: "学习目标", link: "/web/engine/" }, // 文件名
      ],
    },
    {
      text: "Vue.js框架源码与进阶",
      items: [
        { text: "学习目标", link: "/web/vue/" }, // 文件名
      ]
    }
  ],
  "/examples/": [
    {
      text: "Examples",
      items: [
        { text: "Markdown Examples", link: "/examples/markdown-examples" },
        { text: "Runtime API Examples", link: "/examples/api-examples" },
      ],
    },
  ],
};
