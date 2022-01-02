import React from "react"
import Link from "next/link"
import NextImage from "./image"
import Card from "react-bootstrap/Card"


const Cards = ({ article }) => {
  
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={article.attributes.image.data.attributes.url} />
        <Card.Body>
          <Card.Title>{article.attributes.title}</Card.Title>
          <Card.Text>
          {article.attributes.description}
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
    </Link>
    // <Link href={`/article/${article.attributes.slug}`}>
    //   <a className="uk-link-reset">
    //     <div className="card">
          
    //         <NextImage className="card-img-top" image={article.attributes.image} />
          
    //       <div className="card-body">
    //         <p id="category">
    //           {article.attributes.categories.data[0].attributes.name}
    //         </p>
    //         <p id="title">
    //           {article.attributes.title}
    //         </p>
    //         <p id="description">{article.attributes.description}</p>
    //       </div>
    //     </div>
    //   </a>
    // </Link>
  )
}

export default Cards
