import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container uk-visible@m" data-uk-navbar uk-navbar="mode: click">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Rouelibre.io</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
                <Link href="/articles"><a>Catégories</a></Link>
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li><Link href="/articles"><a className="dropdown-item" >Tous les articles</a></Link></li>
                      <li className="uk-nav-divider"></li>
                      {categories.map((category) => {
                        return (
                          <li key={category.id}>
                            <Link href={`/category/${category.attributes.slug}`}>
                              <a className="dropdown-item">{category.attributes.name}</a>
                            </Link>
                          </li>
                          )
                        })}
                    </ul>
                </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav