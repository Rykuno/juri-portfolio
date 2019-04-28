import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Title = styled.h1`
  color: #4da474;
  margin-left: 8px;
`

const PortfolioSelectorContainer = styled.div`
  display: flex;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: "100%";
  justify-content: space-between;
  margin-right: 5%;
  padding-top: 5%;
`

const Seperator = styled.h2`
  margin-left: 16px;
  margin-right: 16px;
`

const Option = styled.h2`
  color: ${props => (props.selection === props.option ? "#42a476" : "#7d7d7d")};
  &:hover {
    cursor: pointer;
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PortfolioPage = () => {
  const [selection, setSelection] = useState("web")

  return (
    <Layout>
      <HeaderContainer>
        <Title>Portfolio</Title>
        <PortfolioSelectorContainer>
          <Option
            selection={selection}
            option="web"
            onClick={() => setSelection("web")}
          >
            Web Design
          </Option>
          <Seperator>/</Seperator>
          <Option
            selection={selection}
            option="product"
            onClick={() => setSelection("product")}
          >
            Product Design
          </Option>
          <Seperator>/</Seperator>
          <Option
            selection={selection}
            option="personal"
            onClick={() => setSelection("personal")}
          >
            Personal Projects
          </Option>
        </PortfolioSelectorContainer>
      </HeaderContainer>
      <StaticQuery
        query={portfolioImageQuery}
        render={data => {
          const {
            [selection]: { edges },
          } = data
          return (
            <ImageContainer>
              {edges.map(({ node }) => {
                return (
                  <Img
                    fluid={node.childImageSharp.fluid}
                    style={{
                      width: 500,
                      height: 500,
                      margin: 8,
                      border: "3px solid black",
                    }}
                  />
                )
              })}
            </ImageContainer>
          )
        }}
      />
    </Layout>
  )
}

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

export default PortfolioPage
