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
        <h1 className="sheet__title">{data.article.articleTitle}</h1>
        <p className="sheet__lead">{data.article.articleTextContent}</p>
        <div className="sheet__gallery">
          <Img fluid={data.article.articleImage.fluid} />
        </div>
      </div>
    </article>
  </Layout>
)

// export const query = graphql`
// query ArticleQuery($slug: String!) {
//   article(slug: { eq: $slug }) {
//     articleTitle
//     articleTextContent
//     slug
//     articleImage {
//       url
//       fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
//         ...GatsbyDatoCmsSizes
//        }
//       }
//     }
//   }
// `
