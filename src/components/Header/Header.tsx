import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { headerStyle, Title, siteTitleLinkStyle, Menu, MenuItem } from "./Header.styles"

const Header = ({ siteTitle }) => (
  <header role='navigation' css={headerStyle}>
    <Title>
      <Link
        to="/"
        css={siteTitleLinkStyle}
      >
        {siteTitle}
      </Link>
    </Title>
    <nav style={{ flex: 4 }}>
      <Menu>
        <MenuItem><a href="#">About</a></MenuItem>
        <MenuItem><a href="#">Develoment</a></MenuItem>
        <MenuItem><a href="#">Contact</a></MenuItem>
      </Menu>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
