import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 250px;
  border-radius: 20px 0 0 0;
  overflow: hidden;
  position: relative;
  box-shadow: 5px 7px 12px #0000006e;
`

const ImageContainer = styled.figure`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  align-items: center;
  height: 250px;
`

const Image = styled.img`
  min-height: 100%;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.9);
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(calc(100% + 16px));
  transition: 0.3s ease;
  ${Container}:hover & {
    transform: translateY(0);
  }
`

const Name = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: black;
`

const ViewMore = styled.div`
  border: none;
  padding: 0;
  position: absolute;
  top: -16px;
  background: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: 0.3s ease;
  left: calc(50% - 32px);
`

const Save = styled.button`
  border: none;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  background: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transform: scale(0);
  transition: 0.3s 0.3s ease;
  ${Container}:hover & {
    transform: scale(1)
  }
`

function Card ({
  src = 'https://dto508s2j2p46.cloudfront.net/system/spree/products/3475/product/October_19_-_Studio-0053_copy.jpg?1542037348',
  name = 'Awesome Ring by Mejuri Winter 2020'
}) {
  return (
    <Container>
      <ImageContainer>
        <Image src={src} />
      </ImageContainer>
      <Save>
          save
      </Save>
      <Description>
        <ViewMore>
            view more
        </ViewMore>
        <Name>
          {name}
        </Name>
      </Description>
    </Container>
  )
}

Card.propTypes = {

}

export default Card
