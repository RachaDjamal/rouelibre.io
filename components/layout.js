import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <>
  <div className="uk-container">
    <Nav categories={categories} />
    {children}
  </div>
  </>
)

export default Layout