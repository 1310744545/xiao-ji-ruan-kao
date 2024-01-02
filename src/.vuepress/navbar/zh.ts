import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
      text: "阅读指南",
      icon: "zhinan",
      prefix: "/阅读指南",
      link: "/阅读指南"
  },
  {
    text: "历年真题",
    icon: "history",
    prefix: "/docs/历年真题",
    children: [
      {
        text: "高级",
        icon: "lightbulb",
        prefix: "高级/",
        children: [
          {text:"信息系统项目管理师", link:"信息系统项目管理师/"},
          {text:"系统架构设计师", link:"系统架构设计师/"},
          {text:"系统分析师",link:"系统分析师/"},
          {text:"网络规划设计师",link:"网络规划设计师/"},
          {text:"系统规划与管理师",link:"系统规划与管理师/"},
        ],
      },
      {
        text: "中级",
        icon: "lightbulb",
        prefix: "中级/",
        children: [
          {text:"软件设计师",link:"软件设计师/"},
          {text:"系统集成项目管理工程师",link:"系统集成项目管理工程师/"},
          {text:"网络工程师",link:"网络工程师/"},
          {text:"数据库系统工程师",link:"数据库系统工程师/"},
          {text:"信息安全工程师",link:"信息安全工程师/"},
          {text:"软件评测师",link:"软件评测师/"},
          {text:"信息系统管理工程师",link:"信息系统管理工程师/"},
          {text:"信息系统监理师",link:"信息系统监理师/"},
          {text:"多媒体应用设计师",link:"多媒体应用设计师/"},
          {text:"嵌入式系统设计师",link:"嵌入式系统设计师/"},
          {text:"电子商务设计师",link:"电子商务设计师/"}
        ],
      },
      {
        text: "初级",
        icon: "lightbulb",
        prefix: "初级/",
        children: [
          {text:"信息处理技术员",link:"信息处理技术员/"},
          {text:"程序员",link:"程序员/"},
          {text:"网络管理员",link:"网络管理员/"},
          {text:"信息系统运行管理员",link:"信息系统运行管理员/"}
        ],
      },
    ],
  },
  {
    text: "官方教材",
    icon: "shu",
    prefix: "/docs/官方教材/",
    children: [
      {
        text: "高级",
        icon: "lightbulb",
        prefix: "高级/",
        children: [
          {text:"信息系统项目管理师", link:"信息系统项目管理师/"},
          {text:"系统架构设计师", link:"系统架构设计师/"},
          {text:"系统分析师",link:"系统分析师/"},
          {text:"网络规划设计师",link:"网络规划设计师/"},
          {text:"系统规划与管理师",link:"系统规划与管理师/"},
        ],
      },
      {
        text: "中级",
        icon: "lightbulb",
        prefix: "中级/",
        children: [
          {text:"软件设计师",link:"软件设计师/"},
          {text:"系统集成项目管理工程师",link:"系统集成项目管理工程师/"},
          {text:"网络工程师",link:"网络工程师/"},
          {text:"数据库系统工程师",link:"数据库系统工程师/"},
          {text:"信息安全工程师",link:"信息安全工程师/"},
          {text:"软件评测师",link:"软件评测师/"},
          {text:"信息系统管理工程师",link:"信息系统管理工程师/"},
          {text:"信息系统监理师",link:"信息系统监理师/"},
          {text:"多媒体应用设计师",link:"多媒体应用设计师/"},
          {text:"嵌入式系统设计师",link:"嵌入式系统设计师/"},
          {text:"电子商务设计师",link:"电子商务设计师/"}
        ],
      },
      {
        text: "初级",
        icon: "lightbulb",
        prefix: "初级/",
        children: [
          {text:"信息处理技术员",link:"信息处理技术员/"},
          {text:"程序员",link:"程序员/"},
          {text:"网络管理员",link:"网络管理员/"},
          {text:"信息系统运行管理员",link:"信息系统运行管理员/"}
        ],
      },
    ],
  },
  {
    text: "背诵知识",
    icon: "zhishi",
    prefix: "/docs/背诵知识/",
    children: [
      {
        text: "高级",
        icon: "lightbulb",
        prefix: "高级/",
        children: [
          {text:"信息系统项目管理师", link:"信息系统项目管理师/"},
          {text:"系统架构设计师", link:"系统架构设计师/"},
          {text:"系统分析师",link:"系统分析师/"},
          {text:"网络规划设计师",link:"网络规划设计师/"},
          {text:"系统规划与管理师",link:"系统规划与管理师/"},
        ],
      },
      {
        text: "中级",
        icon: "lightbulb",
        prefix: "中级/",
        children: [
          {text:"软件设计师",link:"软件设计师/"},
          {text:"系统集成项目管理工程师",link:"系统集成项目管理工程师/"},
          {text:"网络工程师",link:"网络工程师/"},
          {text:"数据库系统工程师",link:"数据库系统工程师/"},
          {text:"信息安全工程师",link:"信息安全工程师/"},
          {text:"软件评测师",link:"软件评测师/"},
          {text:"信息系统管理工程师",link:"信息系统管理工程师/"},
          {text:"信息系统监理师",link:"信息系统监理师/"},
          {text:"多媒体应用设计师",link:"多媒体应用设计师/"},
          {text:"嵌入式系统设计师",link:"嵌入式系统设计师/"},
          {text:"电子商务设计师",link:"电子商务设计师/"}
        ],
      },
      {
        text: "初级",
        icon: "lightbulb",
        prefix: "初级/",
        children: [
          {text:"信息处理技术员",link:"信息处理技术员/"},
          {text:"程序员",link:"程序员/"},
          {text:"网络管理员",link:"网络管理员/"},
          {text:"信息系统运行管理员",link:"信息系统运行管理员/"}
        ],
      },
    ],
  },
]);
