/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "wenlive",
    repo: "Issue-Blog-With-Github-Action",
    clientId: "a8d6afea86392395ec42",
    clientSecret: "5a5f040fcbf1bde818aaa33bcb8bee4d09dff1c7"
  },

  repoConfig: {
    owner: "wenlive",
    repo: "Issue-Blog-With-Github-Action",
    pushBranch: "master",
    email: "liboqi1996@126.com",
    filterUsers: []
  },

  title: "wenlive's Blog",
  description: "念经",
  customDomain: "",
  base: "/Issue-Blog-With-Github-Action/",

  slogan: {
    main: "可比克",
    sub: "八音盒"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/Issue-Blog-With-Github-Action"
      },
      {
        name: "Github",
        link: "https://github.com/wenlive"
      }
    ],
    headTitle: ["乙醇 水 薄荷"],
    friendLinks: [],
    extraFooters: [],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
