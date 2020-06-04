import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as IconSave } from '../../assets/save.svg'
import { ReactComponent as IconLinkExternal } from '../../assets/external.svg'

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 20px 0 0 0;
  overflow: hidden;
  position: relative;
  
  box-shadow: 0px 5px 16px 0px #0000002e;
  transition: 0.3s ease;
  &:hover {
    box-shadow: 0px 10px 20px 0px #0000002e;
  }
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
  width: 100%;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.9);
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + 16px));
  transition: 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  ${Container}:hover & {
    transform: translateY(0);
  }
`

const Name = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: black;
  text-align: center;
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
  left: calc(50% - 16px);
  background: #ffffffe6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 22px;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 18px;
  }
`

function Card ({item}) {
  const {name, variant_images} = item;
  return (
    <Container>
      <ImageContainer>
        <Image src={variant_images[0].attachment_url_medium} />
      </ImageContainer>
      <Save>
        <IconSave />
      </Save>
      <Description>
        <ViewMore>
          <IconLinkExternal />
        </ViewMore>
        <Name>
          {name}
        </Name>
      </Description>
    </Container>
  )
}

Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string
}

export default Card
