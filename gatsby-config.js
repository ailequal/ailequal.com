module.exports = {
    siteMetadata: {
        siteUrl: `https://www.ailequal.com`,
        title: `ailequal`,
        description: `My developer portfolio website.`
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/ailequal.png"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        'gatsby-plugin-postcss'
    ]
};
