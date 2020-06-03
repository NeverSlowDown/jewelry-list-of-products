import React from 'react'
import styled from 'styled-components'
import Nav from './components/Nav'
import ProductList from './components/ProductList'

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
`

function App () {
  return (
    <MainContainer>
      <Nav />
      <ProductList />
    </MainContainer>
  )
}

export default App
