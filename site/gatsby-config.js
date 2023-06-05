
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Alpine`,
    description: `A Hack Club service event with the Girl Scouts of Utah.`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Manrope`,
            file: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"`,
          },
        ],
      },
    }
  ],
}
