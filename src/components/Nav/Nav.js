import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ReactComponent as IconAll } from '../../assets/all.svg'
import { ReactComponent as IconBox } from '../../assets/box.svg'
import { ReactComponent as IconBracelet } from '../../assets/bracelet.svg'
import { ReactComponent as IconEarring } from '../../assets/earring.svg'
import { ReactComponent as IconEngagement } from '../../assets/engagement.svg'
import { ReactComponent as IconFavorite } from '../../assets/favorite.svg'
import { ReactComponent as IconNecklace } from '../../assets/necklace.svg'
import { ReactComponent as IconPendant } from '../../assets/pendant.svg'
import { ReactComponent as IconRing } from '../../assets/ring.svg'

const MainNav = styled.nav`
  display: flex;
  left: 0;
  top: 0;
  height: 100vh;
  flex: 0 0 120px;
  position: relative;
  box-shadow: 1px 0px 20px 0px #7b7b7b54
`

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: sticky;
  top: 0;
  max-height: 100vh;
  overflow-y: auto;
`

const Item = styled.li`
  display: flex;
  justify-content: center;
  flex: 1;
`

const Button = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  background: none;
  border: none;
  padding: 10px;
  flex: 1;
  color: black;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 300;
  &:active, &:focus{
    outline: none;
    color: #debd9d
  }
  &:hover{
    svg g {
      fill: #debd9d
    }
    &.current{
      color: black;
      svg g {
        fill: black;
      }
    }
  }

`

const IconContainer = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
  .current & {
    transition: 0.3s ease;
    background: #debd9d;
  }
  svg {
    width: 24px;
  }
`

function Nav (props) {
  return (
    <MainNav>
      <CategoryList>
        <Item>
          <Button exact to="/" activeClassName="current">
            <IconContainer>
              <IconAll />
            </IconContainer>
            All products
          </Button>
        </Item>
        <Item>
          <Button to="/favorites" activeClassName="current">
            <IconContainer>
              <IconFavorite />
            </IconContainer>
            My Favorites
          </Button>
        </Item>
        <Item>
          <Button to="/bracelets" activeClassName="current">
            <IconContainer>
              <IconBracelet />
            </IconContainer>
            Bracelets
          </Button>
        </Item>
        <Item>
          <Button to="/necklaces" activeClassName="current">
            <IconContainer>
              <IconNecklace />
            </IconContainer>
            Necklaces
          </Button>
        </Item>
        <Item>
          <Button to="/earrings" activeClassName="current">
            <IconContainer>
              <IconEarring />
            </IconContainer>
            Earrings
          </Button>
        </Item>
        <Item>
          <Button to="/engagement" activeClassName="current">
            <IconContainer>
              <IconEngagement />
            </IconContainer>
            Engagement
          </Button>
        </Item>
        <Item>
          <Button to="/pendants" activeClassName="current">
            <IconContainer>
              <IconPendant />
            </IconContainer>
            Pendants
          </Button>
        </Item>
        <Item>
          <Button to="/rings" activeClassName="current">
            <IconContainer>
              <IconRing />
            </IconContainer>
            Rings
          </Button>
        </Item>
        <Item>
          <Button to="/sets" activeClassName="current">
            <IconContainer>
              <IconBox />
            </IconContainer>
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
