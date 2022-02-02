import React from "react"
import Link from "next/link"
import NextImage from "./thumbnail"


const Cards = ({ article }) => {
  //console.log(article.attributes.image)
  const categories = article.attributes.categories.data;
  
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-toggle">
      <div className="uk-card uk-card-small uk-card-hover" >
        <div>
          <NextImage className="uk-card-media-top" image={article.attributes.image} />
        </div>
        <div className="uk-card-body">
          <h5 className="uk-card-title" id="title">{article.attributes.title}</h5>
          {categories.map((category) => {
                        return (
                          <span key={category.id} className="uk-card-badge uk-label">
                            {category.attributes.name}
                          </span>
                          )
                        })}
          <p id="description" className="uk-text-truncate">{article.attributes.description}</p>
          <button className="uk-button uk-button-text">lire en entier</button>
        </div>
      </div>
      </a>
      </Link>
  )
}

export default Cards
