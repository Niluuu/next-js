import React from 'react'
import styled from 'styled-components'
import Nav from './Nav';
import Header from './Header'
import img from '../../scr/img/banner.png'
import BigCart from '../ui/cards/bigCart';
import H3 from '../ui/typograf/h3'
import Text from '../ui/typograf/text'
import zigzag from '../img/zigzag.svg'

const Body = styled.div`
  width: auto;
`;

const ZigzadSvg = styled.div`
  position: absolute;
  width: 100%;
  bottom: -61%;
  height: 39px;
  z-index: 200;
  & > img {
    transform: rotate(180deg);
  }
`;

export default function Layout() {
  return (
    <Body>
      <Nav />
      <Header background={img} >
        <BigCart>
          <H3>Food Catering Service.</H3>
          <Text grey>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.</Text>
        </BigCart>
      </Header>
      <ZigzadSvg><img src={zigzag} /></ZigzadSvg>
     
    </Body>
  )
}