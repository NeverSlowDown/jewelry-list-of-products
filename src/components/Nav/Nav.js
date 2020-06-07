import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ReactComponent as IconAll } from '../../assets/all.svg'
import { ReactComponent as IconBox } from '../../assets/box.svg'
import { ReactComponent as IconBracelet } from '../../assets/bracelet.svg'
import { ReactComponent as IconEarring } from '../../assets/earring.svg'
import { ReactComponent as IconEngagement } from '../../assets/engagement.svg'
import { ReactComponent as IconFavorite } from '../../assets/save.svg'
import { ReactComponent as IconNecklace } from '../../assets/necklace.svg'
import { ReactComponent as IconPendant } from '../../assets/pendant.svg'
import { ReactComponent as IconRing } from '../../assets/ring.svg'
import { ReactComponent as IconFilter } from '../../assets/filter.svg'
import { ReactComponent as IconCross } from '../../assets/cross.svg'

import { useSelector } from 'react-redux'

import { favoritesProducts } from '../ProductList/ProductListSlice'

const MainNav = styled.nav`
  display: flex;
  left: 0;
  top: 0;
  height: 100vh;
  flex: 0 0 120px;
  position: sticky;
  top: 0;
  @media screen and (max-width: 767px) {
    flex: 0;
    z-index: 1;
  }
`

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100vh;
  overflow-y: auto;
  background: rgba(255,255,255,0.8);
  box-shadow: 1px 0px 20px 0px #7b7b7b54;
  @media screen and (max-width: 767px) {
    position: fixed;
    transition: 0.3s ease;
    transform: translateX(${props => props.isHidden ? -100 : 0}%);
    height: 100%;
  }
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
    color: ${props => props.theme.main}
  }
  &:hover{
    svg g {
      fill: ${props => props.theme.main}
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
  position: relative;
  .current & {
    transition: 0.3s ease;
    background: ${props => props.theme.main};
  }
  svg {
    width: 24px;
  }
`

const FavoriteCounter = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  background: red;
  color: white;
  font-weight: bold;
  font-size: 8px;
  justify-content: center;
  border-radius: 50%;
  animation: popUp 0.5s ease;
  @keyframes popUp {
    0%{
      transform: scale(0)
    }
    50% {
      transform: scale(1.5)
    }
    100% {
      transform: scale(1)
    }
  }
`

export const ButtonFilter = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
  position: fixed;
  right: 40px;
  bottom: 80px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.26);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.main};
  width: 50px;
  height: 50px;
  border: none;
  overflow: hidden;
`

export const MenuFilter = styled(IconFilter)`
  width: 22px;
  fill: white;
  transition: 0.3s ease;
  transform: translateX(${props => props.isHidden ? 0 : 40}px);
  position: absolute
`

const Cross = styled(IconCross)`
  width: 32px;
  path {
    fill: white;
  }
  transition: 0.3s ease;
  transform: translateX(${props => props.isHidden ? 40 : 0}px);
  position: absolute;
`

function Nav (props) {
  const favoriteCounter = useSelector(favoritesProducts).length
  const [isOpen, setIsOpen] = useState(true)
  return (
    <MainNav>
      <ButtonFilter onClick={() => setIsOpen(!isOpen)}>
        <MenuFilter isHidden={isOpen} />
        <Cross isHidden={isOpen}/>
      </ButtonFilter>
      <CategoryList isHidden={isOpen}>
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
              {favoriteCounter > 0 &&
                <FavoriteCounter>
                  {favoriteCounter}
                </FavoriteCounter>
              }
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
          <Button to="/stakingsets" activeClassName="current">
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
