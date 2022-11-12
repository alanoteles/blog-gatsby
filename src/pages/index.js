import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
      query MyQuery {
          allMarkdownRemark {
              nodes {
                  fields {
                      slug
                  }
                  frontmatter {
                      title
                      description
                      date(formatString: "DD/MM/YYYY")
                      category
                      background
                  }
                  wordCount {
                      paragraphs
                      sentences
                      words
                  }
                  timeToRead
              }
          }
      }
  `)


  const postList = allMarkdownRemark.nodes

  return (
  <Layout>
    <SEO title="Home" />
    { postList.map(({ frontmatter: { background, category, description, title, date },
     timeToRead, fields: { slug } ,
    }, i) => (
      <PostItem
        slug={slug}
        category={category}
        background={background}
        date={date}
        timeToRead={timeToRead}
        title={title}
        description={description}
        key={i}
      />
    ))}

  </Layout>
  )}

export default IndexPage
