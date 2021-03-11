import React from 'react'
import { graphql } from 'gatsby'
import HeaderBlock from "./building-blocks/HeaderBlock";
import ParagraphBlock from "./building-blocks/ParagraphBlock";
import ImageBlock from "./building-blocks/ImageBlock";
import Layout from "../components/layout.js"

export default ({ data }) => (
  <Layout>
    {data.datoCmsPage.content.map((block) => {
      switch (block.model.apiKey) {
        case 'header':
          return <HeaderBlock key={block.id} block={block} />
        case 'paragraph':
          return <ParagraphBlock key={block.id} block={block} />
        case 'image':
          return <ImageBlock key={block.id} block={block} />
      }
    })
    }
  </Layout>
)

export const query = graphql`
query PageQuery($slug: String) {
  datoCmsPage(slug: {eq: $slug}) {
    slug
    pageTitle
    content {
      ... on DatoCmsHeader {
        id
        title
        model {
          apiKey
        }
        level
      }
      ... on DatoCmsImage {
        id
        image {
          url
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
        model {
          apiKey
        }
      }
      ... on DatoCmsParagraph {
        id
        model {
          apiKey
        }
        content
        contentNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`
