module.exports = {
  siteMetadata: {
    title: "Lofi Nerdfighters",
    siteUrl: "https://lofinerdfighters.com",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "@chakra-ui/gatsby-plugin",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
