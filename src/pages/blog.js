import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

const Blog = (props) => (
    <div>
        <Helmet>
            <title>Posts</title>
            <meta name="description" content="Blog Posts" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Posts</h1>
                    </header>
                    {
                        props.data.allMarkdownRemark.edges.map((edge, key) => {
                            console.log(key, edge);
                            return <div key={key}>
                                <Link to={edge.node.frontmatter.path}>
                                    {edge.node.frontmatter.title} // {edge.node.frontmatter.date}
                                </Link>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>

    </div>
)

export default Blog

export const BlogQuery = graphql`
query BlogQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
        }
      }
    }
  }
}
`