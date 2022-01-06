import React from "react"
import Link from "next/link"
import NextImage from "./thumbnail"


const Cards = ({ article }) => {
  //console.log(article.attributes.image)
  
  return (
    
      <div className="card" style={{width: 18 + 'rem'}}>
        <div>
          <NextImage className="card-img-top" image={article.attributes.image} />
        </div>
        <div className="card-body">
          <h5 className="card-title" id="title">{article.attributes.title}</h5>
          <h6 className="card-text" id="category">{article.attributes.categories.data[0].attributes.name}</h6>
          <p className="card-text" id="description">{article.attributes.description}</p>
          <Link href={`/article/${article.attributes.slug}`}>
            <a href="#" className="btn btn-primary stretched-link">Lire en entier</a>
          </Link>
        </div>
      </div>
    
  )
}

export default Cards
