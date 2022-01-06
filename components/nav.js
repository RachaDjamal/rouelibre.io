import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/"><a className="navbar-brand">Rouelibre</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catégories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link href="/articles"><a className="dropdown-item" >Tous les articles</a></Link></li>
                <li><hr className="dropdown-divider"></hr></li>
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav