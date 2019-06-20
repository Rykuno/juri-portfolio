import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const SocialMedia = styled.div`
  height: 300px;
  width: 300px;
  border: 2px solid #979797;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
  @media (max-width: 1200px) {
    margin-bottom: 30px;
  }
`

const AccountHandle = styled.a`
  text-decoration: underline;
`

const Social = ({ icon, handle, url }) => (
  <SocialMedia>
    <Img
      fluid={icon}
      style={{ width: 100, height: 100 }}
      imgStyle={{ width: 100, height: 100 }}
    />
    <AccountHandle target="_blank" href={url}>
      {handle}
    </AccountHandle>
  </SocialMedia>
)

export default Social
