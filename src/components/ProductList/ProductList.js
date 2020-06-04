import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import styled from 'styled-components/macro'

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
  getProductsStakingSets
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
  const myProducts = useSelector((state) => state.products.all)

  useEffect(() => {
    dispatch(getProductsAll)
  }, [])

  return (
    <Container>
      <List>
        {myProducts.map(item => (
          <Item key={item.id}>
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
