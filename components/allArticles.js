import React from "react"
import Cards from "./card"

const Allarticles = ({ articles }) => {
  const lastArticles = articles.sort((a, b) => b.id - a.id)
  
  return (
    <div className="uk-grid">
      {lastArticles.map((article) => {
        return (
          <div className="uk-width-1-2@s" key={article.id}>
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
