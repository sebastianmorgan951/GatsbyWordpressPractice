module.exports = {
  siteMetadata: {
    title: `Wordpress + React Tutorial`,
    description: `Using WordPress as CMS with React`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://wordpressreact.local/graphql`,
        schema: {
          timeout: 50000,   //This allows the develop to be more lenient with timing requests
        },      //Can also change the schema: requestConcurrency or perPage to speed up process
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
