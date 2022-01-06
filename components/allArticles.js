import React from "react"
import Cards from "./card"

const Allarticles = ({ articles }) => {
  const lastArticles = articles.sort((a, b) => b.id - a.id)
  
  return (
    <div className="row">
      {lastArticles.map((article) => {
        return (
          <div className="col-md-auto" key={article.id}>
              <Cards
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
              </div>
            )
      })}
    </div>
  )
}

export default Allarticles
