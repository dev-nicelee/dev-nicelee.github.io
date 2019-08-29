
import SEO from "../components/seo"
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function IndexPage({
  data,
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds our post data
  console.log(allMarkdownRemark)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby blog with Markdown pages.</p>
      {/* <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link> */}
      {allMarkdownRemark.edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <div><Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link></div>)
      }
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
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

