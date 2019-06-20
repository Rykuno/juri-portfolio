import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  width: 70%;
  height: 100vh;
  margin-left: 15%;

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
  }
`

const Background = styled.div`
  background-color: #a6ffdc;
  width: 50%;
  height: 70%;
  position: absolute;
  left: 15%;
  top: 5%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1200px) {
    position: absolute;
    width: 100%;
    top: 13%;
    margin: auto;
    left: 0;
  }
`

const Page = styled.div`
  width: 80%;
  height: 120%;
  margin: auto;
  margin-top: 5%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid black;
  padding: 20px;
  padding-top: 5%;

  @media (max-width: 1200px) {
    width: 90%;
    height: auto;
  }
`

const Title = styled.h1`
  color: #565656;
`

const SubTitle = styled.h2`
  color: #7d7d7d;
  margin-bottom: 0px;
`

const Email = styled(SubTitle)`
  text-decoration: underline;
`

const Divider = styled.div`
  width: 70%;
  height: 2px;
  background-color: black;
  margin: 32px;
`

const Text = styled.p`
  /* text-align: justify; */
  /* padding-left: 12%;
  padding-right: 10%; */
  /* font-size: 1.5em; */
  width: 70%;
  /* margin: auto; */
  text-align: center;
  color: #7d7d7d;
  /* text-indent: 24px; */
  /* font-weight: bold; */
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Background>
        <Page>
          <Title>Juri Ahn</Title>
          <SubTitle>Graphics Designer</SubTitle>
          <SubTitle>Dallas, Tx</SubTitle>
          <br />
          <a href="mailto:juri@avyxia.com">
            <Email>juri@avyxia.com</Email>
          </a>
          <Divider />
          <Text>
            Hello! I am a UI/UX designer based here in the Dallas, TX area.
          </Text>
          <Text>
            I specialize in web and software design/wireframes
            <span style={{ color: "#565656" }}>(</span>and I dabble with
            animation <span>&#128513;</span>
            <span style={{ color: "#565656" }}>)</span>.
          </Text>
          <Text>
            Feel free to reach out to me in any of my social media pages or
            email me. I look forwards to working with you soon!
          </Text>
        </Page>
      </Background>
    </Container>
  </Layout>
)

export default IndexPage
