import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/docs/官方教材/": [
    {
      text: "高级",
      prefix: "高级/",
      children: "structure",
    },
    {
      text: "中级",
      prefix: "中级/",
      children:"structure",
    },
    {
      text: "初级",
      prefix: "初级/",
      children:"structure",
    },
  ],
  "/docs/历年真题/": [
    {
      text: "高级",
      prefix: "高级/",
      children: "structure",
    },
    {
      text: "中级",
      prefix: "中级/",
      children:"structure",
    },
    {
      text: "初级",
      prefix: "初级/",
      children:"structure",
    },
  ],
  "/docs/背诵知识/": [
    {
      text: "高级",
      prefix: "高级/",
      children: "structure",
    },
    {
      text: "中级",
      prefix: "中级/",
      children:"structure",
    },
    {
      text: "初级",
      prefix: "初级/",
      children:"structure",
    },
  ],
});
