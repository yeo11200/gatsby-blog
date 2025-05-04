const path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  // 1) 커스텀 alias 추가
  config.resolve.alias["@components"] = path.resolve(
    __dirname,
    "src/components"
  );
  config.resolve.alias["@styles"] = path.resolve(__dirname, "src/styles");

  // 2) 이미지/font 처리 로더 예시 (추가하고 싶다면)
  // config.module.rules.push({
  //   test: /\.(png|jpe?g|gif|svg)$/i,
  //   type: 'asset/resource',
  //   generator: { filename: 'images/[hash][ext][query]' }
  // });

  actions.replaceWebpackConfig(config);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // content/about/resume.ko.md → /about
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/resume.ko.md$/" } }
      ) {
        nodes {
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw result.errors;
  }

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: "/about",
      component: path.resolve(`./src/templates/AboutTemplate.tsx`),
      context: {
        html: node.html,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
    });
  });
};
