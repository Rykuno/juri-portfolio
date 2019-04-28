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
`

const AccountHandle = styled.h3`
  text-decoration: underline;
`

const Social = ({ icon, handle }) => (
  <SocialMedia>
    <Img
      fluid={icon}
      style={{ width: 100, height: 100 }}
      imgStyle={{ width: 100, height: 100 }}
    />
    <AccountHandle>{handle}</AccountHandle>
  </SocialMedia>
)

export default Social
