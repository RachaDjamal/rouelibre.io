import React from "react"
import Cards from "./card"

const Articles = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5)
  // const leftArticles = articles.slice(0, leftArticlesCount)
  // const rightArticles = articles.slice(leftArticlesCount, articles.length)
  const lastArticles = articles.reverse().slice(0, 4);
  

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
