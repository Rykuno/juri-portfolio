/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { GlobalStyle } from "../../global-styles"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"

const SiteTitle = graphql`
  query SiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Container = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  align-items: flex-start;
  padding-left: 5%;
  /* background-color: grey; */
`

const Logo = styled.h2`
  text-decoration: overline;
  align-self: flex-start;
  padding-top: 30px;
  position: absolute;
  color: #565656;
  padding-right: 8px;
`

const Navigation = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: ${props => (props.to === props.path ? "#33a578" : "black")};
`

const NavDash = styled.div`
  width: 30px;
  height: 2px;
  margin-left: 8px;
  margin-top: 2px;
  background-color: ${props => (props.path === props.nav ? "black" : "white")};
`

const Main = styled.div`
  margin-left: 15%;
`

const NavItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const Layout = ({ children }) => {
  console.log(globalHistory.location.pathname)
  const { pathname } = globalHistory.location
  return (
    <StaticQuery
      query={SiteTitle}
      render={data => (
        <div>
          <Container>
            <Logo>jAhn</Logo>
            <Navigation>
              <NavItemContainer>
                <NavItem to="/" path={pathname}>
                  Home
                </NavItem>
                <NavDash path={pathname} nav="/" />
              </NavItemContainer>
              <NavItemContainer>
                <NavItem to="/portfolio/" path={pathname}>
                  Portfolio
                </NavItem>
                <NavDash path={pathname} nav="/portfolio/" />
              </NavItemContainer>
              <NavItemContainer>
                <NavItem to="/social/" path={pathname}>
                  Social
                </NavItem>
                <NavDash path={pathname} nav="/social/" />
              </NavItemContainer>
            </Navigation>
          </Container>
          <Main>{children}</Main>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
