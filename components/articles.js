import React from "react"
import Cards from "./card"

const Articles = ({ articles }) => {
  const tmp = articles.sort((a, b) => b.id - a.id)
  const lastArticles = tmp.slice(0, 4);
  //console.log(lastArticles)
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

export default Articles
