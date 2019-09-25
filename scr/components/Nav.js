import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import logo from '../img/logo.png'
import BoxedButton from '../ui/buttons/boxedButton'
import { FaAngleDown } from 'react-icons/fa';

const Navbar = styled.div`
  width: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  z-index: 300;
`;

const HoverLink = styled.div`
  width: 70px;
  height: 60px;
  text-align: center;
  display: block;
  color: #fff !important;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 400;
  display: inline-block;
  padding: 35px 10px;
  position: relative;
  ${props => props.primary && css`
    & > a {
      color: white !important;
    }
  `}
  cursor: pointer;
  &:hover {
    color: green;
    display: block;
  }
  &:hover > .dropdown{
    opacity: 1;
    visibility:visible;
    top: 87px;
  }
  &:after {
    content: '';
    position: relative;
    display: block;
    bottom: 0px;
    width: 100%; 
    height: 2px;
    background: #78b454;
    margin-top: 30px;
    z-index: -1;
    -webkit-transform:scaleX(0);
    -ms-transform:scaleX(0);
    transform:scaleX(0);
    -webkit-transition: -webkit-transform .5s;
    transition:         transform .5s;
  }
  &:hover:after {
    position: relative;
    display: flex;
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
  }
`;

const Dropdown = styled.div`
    position: absolute;
    top: 140%;
    background: #fff;
    color: #333;
    width: 200px;
    z-index: 2;
    box-shadow: 0 0 10px rgba(0,0,0,.02);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .6s;
    -moz-transition: .6s;
    -o-transition: .6s;
    transition: .6s;
`;

const List = styled.li`
  padding: 15px 20px;
  color: #333 !important;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  &:hover > a {
    color: #78b454;
  }
`

export default function Nav() {
  return (
    <Navbar>
      <HoverLink primary ><Link href='/about'>About</Link></HoverLink>
      <HoverLink primary ><Link href='/about'>Servise</Link></HoverLink>
      <HoverLink primary ><Link href='/about'>Menu</Link></HoverLink>
      <HoverLink primary ><Link href='/about'>Gallery</Link></HoverLink>
      <Link href='/'><img src={logo} /></Link>
      <HoverLink primary >
        <Link href='/about'>Pages </Link>
        <FaAngleDown className="down-i" />
        <Dropdown className="dropdown" >
          <List><Link href="/">Blog</Link></List>
          <List><Link href="/">Community</Link></List>
        </Dropdown>
      </HoverLink>
      <HoverLink primary >
        <Link href='/about'>Pages </Link>
        <FaAngleDown className="down-i" />
        <Dropdown className="dropdown" >
          <List><Link href="/">Blog</Link></List>
          <List><Link href="/">Community</Link></List>
        </Dropdown>
      </HoverLink>
      <HoverLink primary><Link href='/about'>Contact</Link></HoverLink>
      <Link href="/"><BoxedButton>Costum Order</BoxedButton></Link>
    </Navbar>
  )
}
