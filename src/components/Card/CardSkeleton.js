import React from 'react'
import styled from 'styled-components/macro'
import {Container, Description} from './Card'

const Skeleton = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: gray;
  animation: loading 1s ease infinite;
  @keyframes loading {
    0% {
      background: #dcdcdc;
    }
    50% {
      background: #ececec;
    }
    100% {
      background: #dcdcdc;
    }
  }
`;

const ItemDescription = styled(Description)`
  height: 70px;
  animation: description 0.5s 0.5s ease forwards;
  @keyframes description {
    100% {
      transform: translateY(0);
    }
  }
`;

const Text = styled.div`
  position: absolute;
  height: 15px;
  width: 0px;
  animation: text 0.5s 1s ease forwards;
  margin-top: 5px;
  @keyframes text {
    100% {
      width: 125px
    }
  }
`;

export default function CardSkeleton() {
  return (
    <Container>
      <Skeleton />
      <ItemDescription> 
        <Text>
          <Skeleton />
        </Text>
      </ItemDescription>
    </Container>
  )
}
