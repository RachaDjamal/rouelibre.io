import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = ({ categories }) => {
  return (
    <>
    <div className="uk-visible@s">
      <nav className="uk-navbar-container" data-uk-navbar uk-navbar="mode: click">
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
            <li><Link href="/about"><a>À propos</a></Link></li>
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
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="uk-hidden@s">
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Rouelibre.io</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <Link href=""><a className="uk-navbar-toggle  uk-navbar-toggle-icon" data-uk-toggle="target: #offcanvas-nav-primary"><FontAwesomeIcon icon="bars" size="lg" /></a></Link>
          
        </div>
      </nav>
    </div>
    <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true; flip : true">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical uk-nav-parent-icon" data-uk-nav>
            <li className="">
                <Link href="/about"><a>À propos</a></Link>
            </li>
            <li><Link href="/articles"><a>Tous les articles</a></Link></li>
            <li className="uk-parent">
                <Link href='/articles'><a>Catégories</a></Link>
                <ul className="uk-nav-sub">
                {categories.map((category) => {
                        return (
                          <li key={category.id}>
                            <Link href={`/category/${category.attributes.slug}`}>
                              <a>{category.attributes.name}</a>
                            </Link>
                          </li>
                          )
                        })}
                </ul>
            </li>
            <li className="">
                <Link href="/contact"><a>Contact</a></Link>
            </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Nav