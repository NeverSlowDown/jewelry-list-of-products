import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import styled from 'styled-components/macro'

const Container = styled.section`
  flex: 1;
  min-height: 100vh;
  display: flex;
`
const List = styled.ul`
  padding: 40px;
  background: lightgray;
  flex: 1;
`

function ProductList (props) {
  return (
    <Container>
      <List>
        List of products
        <Card />
      </List>
    </Container>
  )
}

ProductList.propTypes = {

}

export default ProductList
