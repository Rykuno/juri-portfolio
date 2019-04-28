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
`

const Background = styled.div`
  background-color: #a6ffdc;
  width: 70%;
  height: 70%;
  position: absolute;
  left: 15%;
  top: 5%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const Page = styled.div`
  width: 60%;
  height: 115%;
  margin: auto;
  margin-top: 5%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 7px solid black;
  padding: 20px;
  padding-top: 10%;
`

const Title = styled.h1`
  color: #565656;
`

const SubTitle = styled.h2`
  color: #7d7d7d;
`

const Email = styled(SubTitle)`
  text-decoration: underline;
`

const Divider = styled.div`
  width: 50%;
  height: 2px;
  background-color: black;
  margin: 32px;
`

const Text = styled.p`
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
  color: #7d7d7d;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Background>
        <Page>
          <Title>Juri Ahn</Title>
          <SubTitle>Graphics/Software Designer</SubTitle>
          <SubTitle>Dallas, Tx</SubTitle>
          <Email>juri@avyxia.com</Email>
          <Divider />
          <Text>
            Scamper stand with legs in litter box, but poop outside crash
            against wall but walk away like nothing happened for i like frogs
            and 0 gravity so cats secretly make all the worlds muffins. Munch,
            munch, chomp, chomp my left donut is missing, as is my right for
            behind the couch, yet i'm bored inside, let me out i'm lonely
            outside, let me in i can't make up my mind whether to go in or out.
          </Text>
        </Page>
      </Background>
    </Container>
  </Layout>
)

export default IndexPage
