import React from "react"
import Link from "next/link"
import NextImage from "./thumbnail"


const Cards = ({ article }) => {
  //console.log(article.attributes.image)
  
  return (
    
      <div className="uk-card uk-card-hover" >
        <div>
          <NextImage className="uk-card-media-top" image={article.attributes.image} />
        </div>
        <div className="uk-card-body">
          <h5 className="uk-card-title" id="title">{article.attributes.title}</h5>
          <h6 id="category">{article.attributes.categories.data[0].attributes.name}</h6>
          <p id="description">{article.attributes.description}</p>
          <Link href={`/article/${article.attributes.slug}`}>
            <a className="btn btn-primary stretched-link">Lire en entier</a>
          </Link>
        </div>
      </div>
    
  )
}

export default Cards
