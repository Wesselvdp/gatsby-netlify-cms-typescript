import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '@components/layout'
import SEO from '@components/seo'
import MastHead from '@components/MastHead'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (

      <Layout location={this.props.location} title={siteTitle}>
        <MastHead quote={post.frontmatter.title} imageSlug={post.frontmatter.imageSlug} />
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <a href="/" className="back article__back">Terug naar homepage</a>
        <section className="padding">
          <div className="article__head">
            <blockquote className="non-blockquote">
              <h1 className="article__title h2">
                “Tijdens mijn stage had ik ineens mijn eureka-moment.”
                {/* {post.frontmatter.title} */}
              </h1>
            </blockquote>
          </div>

          <div class="article__body">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

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
