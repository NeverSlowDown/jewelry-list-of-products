import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import {
  NavLink
} from 'react-router-dom'

const MainNav = styled.nav`
  display: flex;
  left: 0;
  top: 0;
  height: 100vh;
  flex: 0 0 120px;
  position: relative;
`

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Item = styled.li`
  display: flex;
  justify-content: center;
  flex: 1;
`

const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: none;
  border: none;
  padding: 10px;
  flex: 1;
  color: black;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 300;
  &.current {
    transition: 0.3s ease;
    background: #debd9d;
  }
  &:hover{
    color: #debd9d;
    &.current{
      color: black;
    }
  }

`

function Nav (props) {
  return (
    <MainNav>
      <CategoryList>
        <Item>
          <Button exact to="/" activeClassName="current">
            All products
          </Button>
        </Item>
        <Item>
          <Button to="/favorites" activeClassName="current">
            My Favorites
          </Button>
        </Item>
        <Item>
          <Button to="/bracelets" activeClassName="current">
            Bracelets
          </Button>
        </Item>
        <Item>
          <Button to="/necklaces" activeClassName="current">
            Necklaces
          </Button>
        </Item>
        <Item>
          <Button to="/earrings" activeClassName="current">
            Earrings
          </Button>
        </Item>
        <Item>
          <Button to="/engagement" activeClassName="current">
            Engagement
          </Button>
        </Item>
        <Item>
          <Button to="/pendants" activeClassName="current">
            Pendants
          </Button>
        </Item>
        <Item>
          <Button to="/rings" activeClassName="current">
            Rings
          </Button>
        </Item>
        <Item>
          <Button to="/sets" activeClassName="current">
            Staking sets
          </Button>
        </Item>

      </CategoryList>
    </MainNav>
  )
}

Nav.propTypes = {

}

export default Nav
