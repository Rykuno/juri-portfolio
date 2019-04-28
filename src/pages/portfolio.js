import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const portfolioImage = graphql`
  fragment portfolioImage on FileConnection {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const portfolioImageQuery = graphql`
  query {
    web: allFile(filter: { relativeDirectory: { eq: "web" } }) {
      ...portfolioImage
    }
    product: allFile(filter: { relativeDirectory: { eq: "product" } }) {
      ...portfolioImage
    }
    personal: allFile(filter: { relativeDirectory: { eq: "personal" } }) {
      ...portfolioImage
    }
  }
`

const PortfolioPage = () => {
  return (
    <Layout>
      <h1>test</h1>
      <StaticQuery
        query={portfolioImageQuery}
        render={data => {
          console.log(data)
          const {
            web: { edges }
          } = data
          console.log(edges)
          return edges.map(({ node }) => {
            console.log(node.childImageSharp.fluid)
            return (
              <Img
                fluid={node.childImageSharp.fluid}
                style={{ width: 300, height: 300 }}
              />
            )
          })
        }}
      />
    </Layout>
  )
}

export default PortfolioPage
