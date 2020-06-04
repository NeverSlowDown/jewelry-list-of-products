import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import styled from 'styled-components/macro'

import { useLocation } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import {
  getProductsAll,
  getProductsFavorites,
  getProductsBracelets,
  getProductsNecklaces,
  getProductsEarrings,
  getProductsEngagement,
  getProductsPendants,
  getProductsRings,
  getProductsStakingSets,
  allProducts,
  favoritesProducts,
  braceletsProducts,
  necklacesProducts,
  earringsProducts,
  engagementProducts,
  pendantsProducts,
  ringsProducts,
  stakingsetsProducts
} from './ProductListSlice'

const Container = styled.section`
  flex: 1;
  min-height: 100vh;
  display: flex;
`
const List = styled.ul`
  padding: 40px;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 30px;
  justify-content: space-around;
  grid-auto-rows: minmax(min-content, max-content);

`
const Item = styled.li`
`

function ProductList (props) {
  const dispatch = useDispatch()
  const currentUrl = useLocation()

  const [currentProducts, setCurrentProducts] = useState([])

  // my products redux state:
  const all = useSelector(allProducts)
  const favorites = useSelector(favoritesProducts)
  const bracelets = useSelector(braceletsProducts)
  const necklaces = useSelector(necklacesProducts)
  const earrings = useSelector(earringsProducts)
  const engagement = useSelector(engagementProducts)
  const pendants = useSelector(pendantsProducts)
  const rings = useSelector(ringsProducts)
  const stakingsets = useSelector(stakingsetsProducts)

  const productDictionary = {
    '/': {
      list: all,
      get: getProductsAll
    },
    '/favorites': {
      list: favorites,
      get: getProductsFavorites
    },
    '/bracelets': {
      list: bracelets,
      get: getProductsBracelets
    },
    '/necklaces': {
      list: necklaces,
      get: getProductsNecklaces
    },
    '/earrings': {
      list: earrings,
      get: getProductsEarrings
    },
    '/engagement': {
      list: engagement,
      get: getProductsEngagement
    },
    '/pendants': {
      list: pendants,
      get: getProductsPendants
    },
    '/rings': {
      list: rings,
      get: getProductsRings
    },
    '/stakingset': {
      list: stakingsets,
      get: getProductsStakingSets
    }
  }

  // everytime the location changes it dispatches the proper category GET
  useEffect(() => {
    // I use currentUrl to call the function that I need depending on my location
    !productDictionary[currentUrl.pathname].list.length > 0 &&
    dispatch(productDictionary[currentUrl.pathname].get)
  }, [currentUrl])

  // and when the redux state changes it sets current products
  useEffect(() => {
    setCurrentProducts(productDictionary[currentUrl.pathname].list)
  }, [currentUrl, all, favorites, bracelets, necklaces, earrings, engagement, pendants, rings, stakingsets])

  console.log({ currentProducts })
  return (
    <Container>
      <List>
        {currentProducts.map((item, index) => (
          <Item key={`${item.id}-${index}`}>
            <Card item={item} />
          </Item>
        ))}
      </List>
    </Container>
  )
}

ProductList.propTypes = {

}

export default ProductList
