import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Social from "../components/social"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 5%;
`

const SocialContainer = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
`

const Title = styled.h2`
  color: #56a372;
`

const SocialPage = () => (
  <StaticQuery
    query={iconQuery}
    render={data => {
      console.log("Img Data: ", data)
      return (
        <Layout>
          <Container>
            <Title>Social Media</Title>
            <SocialContainer>
              <Social
                icon={data.dribble.childImageSharp.fluid}
                handle="@yellingspaghetti"
              />
              <Social
                icon={data.instagram.childImageSharp.fluid}
                handle="@yellingspaghetti"
              />
              <Social
                icon={data.twitter.childImageSharp.fluid}
                handle="@yellingspaghetti"
              />
            </SocialContainer>
          </Container>
        </Layout>
      )
    }}
  />
)

export const iconImage = graphql`
  fragment iconImage on File {
    childImageSharp {
      fluid(maxWidth: 100, maxHeight: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const iconQuery = graphql`
  query {
    dribble: file(relativePath: { eq: "dribble-icon@3x.png" }) {
      ...iconImage
    }
    instagram: file(relativePath: { eq: "ig-icon@3x.png" }) {
      ...iconImage
    }
    twitter: file(relativePath: { eq: "twitter-icon@3x.png" }) {
      ...iconImage
    }
  }
`

export default SocialPage
