import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainNav = styled.nav`
  display: flex;
  flex-direction: column;
`

function Nav (props) {
  return (
    <MainNav>
      menu
    </MainNav>
  )
}

Nav.propTypes = {

}

export default Nav
