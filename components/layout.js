import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <>
  <div class="container-lg">
    <Nav categories={categories} />
    {children}
  </div>
  </>
)

export default Layout