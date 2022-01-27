import React from "react"
import Allarticles from "../components/allArticles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const allArticles = ({ articles, categories, homepage }) => {

    const seo = {
        metaTitle: "Tous les articles",
        metaDescription: "Tous les articles de rouelibre.io",
        shareImage: homepage.attributes.image
    }

    return (
      <Layout categories={categories}>
        <Seo seo={seo} />
        
          <div>
            <h1>Tous les articles</h1>
            <Allarticles articles={articles} />
          </div>
        
      </Layout>
    )
  }
  
  export async function getStaticProps() {
    // Run API calls in parallel
    const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
      fetchAPI("/articles", { populate: "*" }),
      fetchAPI("/categories", { populate: "*" }),
      fetchAPI("/homepage", {
        populate: {
          seo: { populate: "*" },
        },
      }),
    ])
    
    return {
      props: {
        articles: articlesRes.data,
        categories: categoriesRes.data,
        homepage: homepageRes.data,
      },
      revalidate: 1,
    }
  }
  
  export default allArticles