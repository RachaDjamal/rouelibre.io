import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
      <div className="uk-container">
        {children}
      </div>
    <Footer />
  </>
)

export default Layout