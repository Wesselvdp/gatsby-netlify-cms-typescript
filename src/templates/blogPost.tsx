import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '@components/layout'
import SEO from '@components/seo'

interface T {
  data: any
}

const BlogPost: FC<T> = ({ data }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout className="blogPost">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
