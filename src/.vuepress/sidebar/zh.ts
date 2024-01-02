import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "小鸡软考",
      link: "/",
      icon: "home-filling"
    },
    {
      text: "阅读指南",
      link: "/阅读指南",
      icon: "zhinan",
    },
  ],
  // 官方教材
  "/官方教材/高级/": [
    {
      text: "小鸡软考",
      link: "/",
      icon: "home-filling"
    },
    {
      text: "阅读指南",
      link: "/阅读指南",
      icon: "zhinan",
    },
    // "",
    {
      text: "信息系统项目管理师",
      prefix: "信息系统项目管理师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "系统架构设计师",
      prefix: "系统架构设计师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "系统分析师",
      prefix: "系统分析师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "网络规划设计师",
      prefix: "网络规划设计师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "系统规划与管理师",
      prefix: "系统规划与管理师/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/官方教材/中级/": [
    {
      text: "小鸡软考",
      link: "/",
      icon: "home-filling"
    },
    {
      text: "阅读指南",
      link: "/阅读指南",
      icon: "zhinan",
    },
    // "",
    {
      text: "小鸡软考",
      link: "/",
      icon: "home-filling"
    },
    {
      text: "阅读指南",
      link: "/阅读指南",
    },
    {
      text: "软件设计师",
      prefix: "软件设计师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "系统集成项目管理工程师",
      prefix: "系统集成项目管理工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "网络工程师",
      prefix: "网络工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "数据库系统工程师",
      prefix: "数据库系统工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "信息安全工程师",
      prefix: "信息安全工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "软件评测师",
      prefix: "软件评测师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "信息系统管理工程师",
      prefix: "信息系统管理工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "信息系统监理师",
      prefix: "信息系统监理师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "多媒体应用设计",
      prefix: "多媒体应用设计/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "嵌入式系统设计",
      prefix: "嵌入式系统设计/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "电子商务设计师",
      prefix: "电子商务设计师/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/官方教材/初级/": [
    {
      text: "小鸡软考",
      link: "/",
      icon: "home-filling"
    },
    {
      text: "阅读指南",
      link: "/阅读指南",
      icon: "zhinan",
    },
    // "",
    {
      text: "信息处理技术员",
      prefix: "信息处理技术员/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "程序员",
      prefix: "程序员/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "网络管理员",
      prefix: "网络管理员/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "信息系统运行管理员",
      prefix: "信息系统运行管理员/",
      children: "structure",
      collapsible: true,
    },
  ],
  
  // 历年真题
  "/历年真题/高级/": [
    {
      text: "小鸡软考",
      link: "/",
      icon: "home-filling"
    },
    {
      text: "阅读指南",
      link: "/阅读指南",
      icon: "zhinan",
    },
    // "",
    {
      text: "信息系统项目管理师",
      prefix: "信息系统项目管理师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "系统架构设计师",
      prefix: "系统架构设计师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "系统分析师",
      prefix: "系统分析师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "网络规划设计师",
      prefix: "网络规划设计师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "系统规划与管理师",
      prefix: "系统规划与管理师/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/历年真题/中级/": [
    {
      text: "小鸡软考",
      link: "/",
      icon: "home-filling"
    },
    {
      text: "阅读指南",
      link: "/阅读指南",
      icon: "zhinan",
    },
    // "",
    {
      text: "软件设计师",
      prefix: "软件设计师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "系统集成项目管理工程师",
      prefix: "系统集成项目管理工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "网络工程师",
      prefix: "网络工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "数据库系统工程师",
      prefix: "数据库系统工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "信息安全工程师",
      prefix: "信息安全工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "软件评测师",
      prefix: "软件评测师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "信息系统管理工程师",
      prefix: "信息系统管理工程师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "信息系统监理师",
      prefix: "信息系统监理师/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "多媒体应用设计",
      prefix: "多媒体应用设计/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "嵌入式系统设计",
      prefix: "嵌入式系统设计/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "电子商务设计师",
      prefix: "电子商务设计师/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/历年真题/初级/": [
    {
      text: "小鸡软考",
      link: "/",
      icon: "home-filling"
    },
    {
      text: "阅读指南",
      link: "/阅读指南",
      icon: "zhinan",
    },
    // "",
    {
      text: "阅读指南",
      link: "/阅读指南",
    },
    {
      text: "信息处理技术员",
      prefix: "信息处理技术员/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "程序员",
      prefix: "程序员/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "网络管理员",
      prefix: "网络管理员/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "信息系统运行管理员",
      prefix: "信息系统运行管理员/",
      children: "structure",
      collapsible: true,
    },
  ],

    // 背诵知识
    "/背诵知识/高级/": [
      {
        text: "小鸡软考",
        link: "/",
        icon: "home-filling"
      },
      {
        text: "阅读指南",
        link: "/阅读指南",
        icon: "zhinan",
      },
      // "",
      {
        text: "信息系统项目管理师",
        prefix: "信息系统项目管理师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "系统架构设计师",
        prefix: "系统架构设计师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "系统分析师",
        prefix: "系统分析师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "网络规划设计师",
        prefix: "网络规划设计师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "系统规划与管理师",
        prefix: "系统规划与管理师/",
        children: "structure",
        collapsible: true,
      },
    ],
    "/背诵知识/中级/": [
      {
        text: "小鸡软考",
        link: "/",
        icon: "home-filling"
      },
      {
        text: "阅读指南",
        link: "/阅读指南",
        icon: "zhinan",
      },
      // "",
      {
        text: "软件设计师",
        prefix: "软件设计师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "系统集成项目管理工程师",
        prefix: "系统集成项目管理工程师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "网络工程师",
        prefix: "网络工程师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "数据库系统工程师",
        prefix: "数据库系统工程师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "信息安全工程师",
        prefix: "信息安全工程师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "软件评测师",
        prefix: "软件评测师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "信息系统管理工程师",
        prefix: "信息系统管理工程师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "信息系统监理师",
        prefix: "信息系统监理师/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "多媒体应用设计",
        prefix: "多媒体应用设计/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "嵌入式系统设计",
        prefix: "嵌入式系统设计/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "电子商务设计师",
        prefix: "电子商务设计师/",
        children: "structure",
        collapsible: true,
      },
    ],
    "/背诵知识/初级/": [
      {
        text: "小鸡软考",
        link: "/",
        icon: "home-filling"
      },
      {
        text: "阅读指南",
        link: "/阅读指南",
        icon: "zhinan",
      },
      // "",
      {
        text: "信息处理技术员",
        prefix: "信息处理技术员/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "程序员",
        prefix: "程序员/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "网络管理员",
        prefix: "网络管理员/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "信息系统运行管理员",
        prefix: "信息系统运行管理员/",
        children: "structure",
        collapsible: true,
      },
    ],
});
