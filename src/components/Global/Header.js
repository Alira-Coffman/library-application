import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { DarkModeContext } from "../../context/DarkModeContext"

function Header() {
   const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return (
    <Navbar className='mb-5' bg={darkMode ? 'dark' : 'light'} expand="lg" variant={darkMode ? 'dark' : 'light'}>
    <Container>
      <Navbar.Brand href="#home">
        test
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
    <Nav className={`justify-content-end flex-grow-1 pe-3 `}>
        <Nav.Item>
        <Nav.Link href="/darkmode">Example</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/search">Search Books</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/mybooks">My books</Nav.Link>
      </Nav.Item>
    <Button size="sm" onClick={toggleDarkMode} variant={darkMode ? 'secondary' : 'dark'}>Switch to {darkMode? 'light' : 'dark'} mode</Button>

    </Nav>
    </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Header;