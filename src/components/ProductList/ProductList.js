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
  return (
    <Container>
      <List>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>

      </List>
    </Container>
  )
}

ProductList.propTypes = {

}

export default ProductList
