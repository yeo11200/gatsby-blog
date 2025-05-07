module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    siteUrl: `https://example.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`],
        },
      },
    },
    // 1) Markdown / MDX 파일 불러오기
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/content/about/`,
      },
    },
    // 2) 순수 Markdown 처리 (resume.ko.md 같은)
    `gatsby-transformer-remark`,
    // 3) MDX 지원 (필요시 .mdx 확장자)
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [],
      },
    },
    // 4) Sass / CSS 로더
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`],
        },
      },
    },
    // 5) 추가 Webpack 설정을 위해 플러그인 없음(아래 gatsby-node.js 참조)
  ],
};
