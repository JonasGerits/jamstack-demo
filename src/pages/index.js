import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
      <h1>Hier komen de articles</h1>
        {data.allDatoCmsArticle.edges.map(({ node: article }) => (
            <div key={article.id} className="showcase__item">
                <figure className="card">
                    <figcaption className="card__caption">
                        <Link to={`/works/${article.slug}`} className="card__image">
                            <Img fluid={article.image.fluid} />
                        </Link>
                        <h6 className="card__title">
                            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                        </h6>
                        <div className="card__description">
                            <p>{article.content}</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        ))}
    </Masonry>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    },
    allDatoCmsArticle {
      edges {
        node {
          id
          title
          slug
          content
          image {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
