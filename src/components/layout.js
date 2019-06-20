/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { GlobalStyle } from "../../global-styles"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"
import Media from "react-media"
import MenuIconSVG from "../images/menu-icon.svg"
import MenuIconDarkSVG from "../images/menu-icon-dark.svg"
import logo from "../images/juri-logo-dark.png"
import logoLight from "../images/juri-logo-light.png"

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

const Logo = styled.img`
  align-self: flex-start;
  font-size: 32px;
  margin-top: 30px;
  height: 50px;
  width: auto;
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

const NavItemMobile = styled(Link)``

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

const NavBar = styled.div`
  width: 100%;
  /* padding-top: 30px; */
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${props => (props.dark ? "rgb(50, 50, 50, 0.95)" : "white")};
`

const LogoMobile = styled.img`
  height: 30px;
  margin-top: 24px;
  width: auto;
  padding-right: 16px;
`

const MenuIcon = styled.img`
  fill: #fff;
  width: 20px;
  height: 20px;
  margin-bottom: 0;
  &:hover {
    cursor: pointer;
  }
`

const DropDown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 5px; */
  /* padding-top: 12px; */
  justify-content: center;
  position: absolute;
  z-index: 20;
  background-color: rgb(50, 50, 50, 0.95);
`

const DropDownOption = styled(Link)`
  background-color: rgb(50, 50, 50, 0);
  width: 100%;
  text-align: center;
  color: ${props => (props.to === props.selected ? "#a6ffdc" : "white")};
  font-size: 24px;
  margin-top: 8px;
  font-weight: lighter;
  margin-bottom: 24px;
  text-decoration: none;
  /* font-weight: bold; */
  padding-bottom: 0;
`

const Divider = styled.div`
  width: 70%;
  height: 2px;
  margin: auto;
  background-color: white;
  margin-bottom: 12px;
`

const Layout = ({ children }) => {
  const { pathname } = globalHistory.location
  const [menuSelected, selectMenu] = useState(false)

  const getLogo = () => {
    if (!menuSelected) {
      return logo
    }

    return logoLight
  }

  return (
    <>
      <Media
        query="(max-width: 1200px)"
        render={() => (
          <>
            <NavBar dark={menuSelected}>
              {!menuSelected && (
                <MenuIcon
                  dark={menuSelected}
                  src={MenuIconSVG}
                  onClick={() => selectMenu(!menuSelected)}
                />
              )}
              {menuSelected && (
                <MenuIcon
                  dark={menuSelected}
                  src={MenuIconDarkSVG}
                  onClick={() => selectMenu(!menuSelected)}
                />
              )}

              <LogoMobile src={getLogo()} />
            </NavBar>
            {menuSelected && (
              <DropDown>
                <DropDownOption
                  to="/"
                  style={{ paddingTop: 16 }}
                  selected={pathname}
                >
                  Home
                </DropDownOption>
                <Divider />
                <DropDownOption to="/portfolio/" selected={pathname}>
                  Portfolio
                </DropDownOption>
                <Divider />
                <DropDownOption to="/social/" selected={pathname}>
                  Social
                </DropDownOption>
                <Divider style={{ marginBottom: "24px" }} />
              </DropDown>
            )}
            <div>{children}</div>
          </>
        )}
      />

      <Media
        query="(min-width: 1200px)"
        render={() => (
          <StaticQuery
            query={SiteTitle}
            render={data => (
              <div>
                <Container>
                  <Logo src={logo} />
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
        )}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
