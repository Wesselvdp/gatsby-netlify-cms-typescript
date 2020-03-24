import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Layout from '@components/layout'
import SEO from '@components/seo'

type PageProps = {
  data: {
    allSanityCity: {
      cities: [
        {
          slug: {
            current: string
          }
          name: string
        }
      ]
    }
  }
}

const IndexPage = ({ data }: PageProps) => {
  return (
    <Layout className="homepage">
      <>
        <SEO title="Home" />
        <h2>hello</h2>
      </>
    </Layout>
  )
}

export default IndexPage
