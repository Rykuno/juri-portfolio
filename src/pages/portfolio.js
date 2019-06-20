import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import ImgDetails from "../components/imgDialog"
import Img from "gatsby-image"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Media from "react-media"
import WebIcon from "../images/webIcon.svg"
import WebIconSelected from "../images/webIconSelected.svg"
import MobileIcon from "../images/mobileIcon.svg"
import MobileIconSelected from "../images/mobileIconSelected.svg"
import ArtIcon from "../images/artIcon.svg"
import ArtIconSelected from "../images/artIconSelected.svg"

const Title = styled.h2`
  color: #4da474;
  padding-left: 8px;
  @media (max-width: 1200px) {
    text-align: center;
  }
`

const PortfolioSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 50%; */
  margin-right: 5%;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: "100%";
  justify-content: space-between;
  padding-top: 5%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
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
  width: 100%;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`

const PortfolioPage = () => {
  const [selection, setSelection] = useState("web")
  const [open, setOpen] = React.useState(false)
  const [file, setFile] = React.useState(undefined)
  const [image, setImage] = useState(undefined)

  const handleClickOpen = (image, file) => () => {
    setImage(image)
    setFile(file)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setImage(undefined)
  }

  const getWebIcon = () => {
    if (selection === "web") {
      return (
        <img
          src={WebIconSelected}
          style={{ height: 25, width: 25, margin: 0, margin: "auto" }}
          onClick={() => setSelection("web")}
        />
      )
    }
    return (
      <img
        src={WebIcon}
        style={{ height: 25, width: 25, margin: 0, margin: "auto" }}
        onClick={() => setSelection("web")}
      />
    )
  }

  const getArtIcon = () => {
    if (selection === "personal") {
      return (
        <img
          src={ArtIconSelected}
          style={{ height: 25, width: 25, margin: 0, margin: "auto" }}
          onClick={() => setSelection("personal")}
        />
      )
    }
    return (
      <img
        src={ArtIcon}
        style={{ height: 25, width: 25, margin: 0, margin: "auto" }}
        onClick={() => setSelection("personal")}
      />
    )
  }

  const getMobileICon = () => {
    if (selection === "product") {
      return (
        <img
          src={MobileIconSelected}
          style={{ height: 25, width: 25, margin: 0, margin: "auto" }}
          onClick={() => setSelection("product")}
        />
      )
    }
    return (
      <img
        src={MobileIcon}
        style={{ height: 25, width: 25, margin: 0, margin: "auto" }}
        onClick={() => setSelection("product")}
      />
    )
  }

  return (
    <Layout>
      <ImgDetails open={open} onClose={handleClose} image={image} file={file} />
      <HeaderContainer>
        <Title>Portfolio</Title>
        <Media
          query="(max-width: 1200px)"
          render={() => (
            <div
              style={{
                borderTop: "1px solid lightgrey",
                borderBottom: "1px solid lightgrey",
                paddingTop: "8px",
                height: 50,
                width: "100%",
                margin: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "70%",
                  height: "100%",
                  margin: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {getWebIcon()}
                  <p style={{ textAlign: "center", margin: 0 }}>Web</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  {getMobileICon()}
                  <p style={{ textAlign: "center", margin: 0 }}>Mobile</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {getArtIcon()}
                  <p style={{ textAlign: "center", margin: 0 }}>Other</p>
                </div>
              </div>
            </div>
          )}
        />

        <Media
          query="(min-width: 1200px)"
          render={() => (
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
          )}
        />
      </HeaderContainer>
      <StaticQuery
        query={portfolioImageQuery}
        render={data => {
          const {
            [selection]: { edges },
          } = data
          return (
            <>
              <Media
                query="(max-width: 1200px)"
                render={() => (
                  <GridList
                    cellHeight="auto"
                    cols={3}
                    style={{ width: "100%" }}
                  >
                    {edges.map(({ node }) => {
                      return (
                        <GridListTile
                          cols={1}
                          onClick={handleClickOpen(
                            node.childImageSharp.fluid,
                            node.base
                          )}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0,
                          }}
                        >
                          <Img
                            fluid={node.childImageSharp.fluid}
                            style={{
                              width: 150,
                              height: 150,
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </GridListTile>
                      )
                    })}
                  </GridList>
                )}
              />

              <Media
                query="(min-width: 1200px)"
                render={() => (
                  <>
                    <ImageContainer>
                      {edges.map(({ node }) => {
                        console.log(node.base)
                        return (
                          <div
                            onClick={handleClickOpen(
                              node.childImageSharp.fluid,
                              node.base
                            )}
                          >
                            <Img
                              fluid={node.childImageSharp.fluid}
                              style={{
                                width: 500,
                                height: 500,
                                margin: 8,
                              }}
                            />
                          </div>
                        )
                      })}
                    </ImageContainer>
                  </>
                )}
              />
            </>
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
        base
        childImageSharp {
          fluid(maxWidth: 2000) {
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
