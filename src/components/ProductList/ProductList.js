import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import CardSkeleton from '../Card/CardSkeleton'
import styled, { createGlobalStyle } from 'styled-components/macro'

import { useLocation } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import Pagination from 'rc-pagination'

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
  flex-wrap: wrap;
`
const List = styled.ul`
  padding: 40px;
  flex: 1 1 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 30px;
  justify-content: space-around;
  grid-auto-rows: minmax(min-content, max-content);

`
const Item = styled.li`
`

// let's override rc-pagination styles

const PaginationStyle = createGlobalStyle`
  .rc-pagination {
    display: flex;
    justify-content: center;
    margin: 40px auto;
  }
`

function ProductList (props) {
  const dispatch = useDispatch()
  const currentUrl = useLocation()

  const [currentProducts, setCurrentProducts] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
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

  // for react pagination
  const itemsPerPage = 15
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

  // when currentProducts changes (when category changes) I restart the data of the paginator to the first piece (in this case its first 15)
  useEffect(() => {
    setCurrentData(currentProducts.slice(0, 0 + itemsPerPage))
  }, [currentProducts])

  const handlePaginate = (current, pageSize) => {
    setCurrentPage(current)
    const offset = (current - 1) * pageSize
    setCurrentData(currentProducts.slice(offset, offset + pageSize))
  }

  return (
    <Container>
      <PaginationStyle />
      <List>
        {
          loading
            ? <>
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
            : currentData.map((item, index) => (
              <Item key={`${item.id}-${index}`}>
                <Card item={item} />
              </Item>
            ))
        }
      </List>
      <Pagination
        total={currentProducts.length}
        prevIcon={<span>prev</span>}
        nextIcon={<span>next</span>}
        pageSize={itemsPerPage}
        onChange={handlePaginate}
        current={currentPage}
      />
    </Container>
  )
}

ProductList.propTypes = {

}

export default ProductList
