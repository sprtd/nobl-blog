import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Nav = styled.header`
  background: rgba(0,0,0, 0.9);
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

`

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 30px;
  margin-left: 40px;
`

const NavLinkGroup = styled.ul`
  display: flex;
  list-style: none;
`

const NavLinkItem = styled(Link)`
  text-decoration: none;
  margin-left: 50px;
  color: #fff;
  font-size: 20px;
`


export { Nav, Logo, NavLinkGroup, NavLinkItem}