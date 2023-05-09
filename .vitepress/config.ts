import { defineConfig } from "vitepress";
import { sidebarItem } from "./sidebar";
import { navItem } from "./nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/my-blog/",
  title: "前端不秃头",
  description: "个人知识库",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/my-blog/logo.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "前端不秃头",
    logo: "/logo.svg",
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2023-present <a href="https://github.com/saofeng-cyber">Sao Feng</a>',
    },
    editLink: {
      pattern: "https://github.com/saofeng-cyber/my-blog/tree/master/:path",
      text: "Edit this page",
    },
    nav: [...navItem],

    sidebar: { ...sidebarItem },

    socialLinks: [
      { icon: "github", link: "https://github.com/saofeng-cyber/my-blog" },
    ],
  },
  ignoreDeadLinks: true,
  vite: {
    server: {
      host: true,
      port: 2023,
    },
  },
});
