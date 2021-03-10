import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsArticle.title}</h1>
        <p className="sheet__lead">{data.datoCmsArticle.content}</p>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
query ArticleQuery($slug: String) {
  datoCmsArticle(slug: {eq: $slug}) {
    slug
    title
    content
    image {
      url
    }
  }
}
`
