import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      category="Misc"
      background="red"
      date="30th of July of 2022"
      timeToRead="4"
      title="Lorem ipsum dolor sit amet"
      description="Pellentesque interdum accumsan nisi quis elementum. Donec congue tellus eu tincidunt pellentesque. Morbi in tellus felis. Vivamus gravida nisi at tortor tincidunt, et tempus nulla aliquam."
    />
  </Layout>
)

export default IndexPage
