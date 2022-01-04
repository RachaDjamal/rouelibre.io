import React from "react"
import Cards from "./card"

const Articles = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5)
  // const leftArticles = articles.slice(0, leftArticlesCount)
  // const rightArticles = articles.slice(leftArticlesCount, articles.length)
  const lastArticles = articles.reverse().slice(0, 4);
  //console.log(articles[0].attributes.image.data.attributes.formats.thumbnail.url)

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
    // <div>
    //   <div className="uk-child-width-1-2@s" data-uk-grid="true">
    //     <div>
    //       {leftArticles.map((article, i) => {
    //         return (
    //           <Cards
    //             article={article}
    //             key={`article__left__${article.attributes.slug}`}
    //           />
    //         )
    //       })}
    //     </div>
    //     <div>
    //       <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
    //         {rightArticles.map((article, i) => {
    //           return (
    //             <Cards
    //               article={article}
    //               key={`article__left__${article.attributes.slug}`}
    //             />
    //           )
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Articles
