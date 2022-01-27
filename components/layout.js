import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children, categories, seo }) => (
  <>
    <div className="uk-container">
      <Nav categories={categories} />
        {children}
      <Footer />
    </div>
  </>
)

export default Layout