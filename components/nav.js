import React from "react"
import Link from "next/link"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"


const Navigation = ({ categories }) => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Rouelibre.io</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
          <NavDropdown title="Catégories" id="basic-nav-dropdown">
          {categories.map((category) => {
              return (
                <NavDropdown.Item key={category.id} href={`/category/${category.attributes.slug}`}>{category.attributes.name}</NavDropdown.Item>
              )
            })}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation