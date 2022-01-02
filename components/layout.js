import Nav from "./nav"
import Container from "react-bootstrap/Container"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    <Container>
    {children}
    </Container>
  </>
)

export default Layout