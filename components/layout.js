import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <>
  <div className="container-lg">
    {/* <Nav categories={categories} /> */}
    {children}
  </div>
  </>
)

export default Layout