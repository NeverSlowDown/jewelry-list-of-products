import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import CardSkeleton from '../Card/CardSkeleton'
import styled, { createGlobalStyle } from 'styled-components/macro'
import errorImage from '../../assets/notfound.jpg'

import { useLocation } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import Pagination from 'rc-pagination'

import {
  isLoading,
  error,
  toggleError,
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
  position: relative;
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
    border-radius: 10px;
    box-shadow: 0px 5px 16px 0px #0000002e;
    display: flex;
    align-items: center;
    overflow: hidden;
    max-height: 50px;
  }
  li.rc-pagination-item, .rc-pagination-next, .rc-pagination-prev {
    padding: 15px;
    background: #f4f4f4;
    font-family: 'Montserrat';
    font-weight: 300;
    cursor: pointer;
    &:hover, &.rc-pagination-item-active {
      background: #debd9d
    }
    &.rc-pagination-disabled{
      opacity: 0.5
    }
  }
  .rc-pagination-jump-next, .rc-pagination-jump-prev {
    margin: 0 10px;
    &:after {
      content: "..."
    }
  }
`
const ErrorContainer = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  flex-direction: column;
  img {
    max-width: 500px;
    width: 100%;
  }
`
const ErrorText = styled.span`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 300;
`

const EmptyContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

const EmptyText = styled.span`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 300;
  opacity: 0;
  animation: fadeUp 0.5s 0.5s ease forwards;
  @keyframes fadeUp {
    0%{
      transform: translateY(20px)
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

function ProductList (props) {
  const dispatch = useDispatch()
  const currentUrl = useLocation()

  const [currentProducts, setCurrentProducts] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const loading = useSelector(isLoading)
  const failed = useSelector(error)

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
    // If I got an error on a previous endpoint call I reset the error status
    failed && dispatch(toggleError(false))
    // I use currentUrl to call the function that I need depending on my location
    !productDictionary[currentUrl.pathname].length > 0 && currentUrl.pathname !== '/favorites' &&
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
      {failed
        ? <ErrorContainer>
          <ErrorText>
            There was an error, try again later!
          </ErrorText>
          <img src={errorImage} alt="error" />
        </ErrorContainer>
        : <List>
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
              : currentData.length === 0
                ? <EmptyContainer>
                  <EmptyText>
                    No items found
                  </EmptyText>
                </EmptyContainer>
                : currentData.map((item, index) => (
                  <Item key={`${item.id}-${index}`}>
                    <Card item={item} />
                  </Item>
                ))
          }
        </List>
      }

      {!loading && currentProducts.length > 0 &&
        <Pagination
          total={currentProducts.length}
          prevIcon='&lt;'
          nextIcon='&gt;'
          pageSize={itemsPerPage}
          onChange={handlePaginate}
          current={currentPage}
        />}
    </Container>
  )
}

ProductList.propTypes = {

}

export default ProductList
