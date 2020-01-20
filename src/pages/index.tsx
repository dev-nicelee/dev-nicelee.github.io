
import SEO from "../components/seo"
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from '@emotion/core'

export const blogTitleLinkStyle = css`
  color: #000;
  font-size: 3vw;
  font-weight: 600;
`

export default function IndexPage({
  data,
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds our post data

  return (
    <Layout>
      <SEO title="Home" />
      {allMarkdownRemark.edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge =>
          <div key={edge.node.id}>
            <Link 
              to={edge.node.frontmatter.path}
              css={blogTitleLinkStyle}
            >
              {edge.node.frontmatter.title}
            </Link>
            <p>{edge.node.frontmatter.date}</p>
          </div>
        )
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

