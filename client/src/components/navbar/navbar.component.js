import { Nav, Logo, NavLinkGroup, NavLinkItem } from './navbar.style'

const style = {
  'margin-right': '50px'
}

const Navbar = () => {
  return (
    <Nav>
      <Logo to='/'>Nobl</Logo>
      <NavLinkGroup>
        <NavLinkItem to='/blog'>Blog</NavLinkItem >
        <NavLinkItem to='/about'>About</NavLinkItem >
        <NavLinkItem to='/contact'  className='last-link' style={style}>Contact</NavLinkItem >
      </NavLinkGroup>
    </Nav>
  )
}

export default Navbar
