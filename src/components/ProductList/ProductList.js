import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import CardSkeleton from '../Card/CardSkeleton'
import styled from 'styled-components/macro'

import { useLocation } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import {
  isLoading,
  getProducts,
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

  const loading = useSelector(isLoading)
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
    '/': all,
    '/favorites': favorites,
    '/bracelets': bracelets,
    '/necklaces': necklaces,
    '/earrings': earrings,
    '/engagement': engagement,
    '/pendants': pendants,
    '/rings': rings,
    '/stakingsets': stakingsets
  }

  // everytime the location changes it dispatches the proper category GET
  useEffect(() => {
    // I use currentUrl to call the function that I need depending on my location
    !productDictionary[currentUrl.pathname].length > 0 &&
    dispatch(getProducts(currentUrl.pathname))
  }, [currentUrl])

  // and when the redux state changes it sets current products
  useEffect(() => {
    setCurrentProducts(productDictionary[currentUrl.pathname])
  }, [currentUrl, all, favorites, bracelets, necklaces, earrings, engagement, pendants, rings, stakingsets])

  return (
    <Container>
      <List>
        {
          loading ?
            <>
              <Item>
                <CardSkeleton />
              </Item>
              <Item>
                <CardSkeleton />
              </Item>
              <Item>
                <CardSkeleton />
              </Item>
            </>
          :
          currentProducts.map((item, index) => (
            <Item key={`${item.id}-${index}`}>
              <Card item={item} />
            </Item>
          ))
        }
      </List>
    </Container>
  )
}

ProductList.propTypes = {

}

export default ProductList
