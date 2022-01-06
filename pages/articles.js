import React from "react"
import Allarticles from "../components/allArticles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const allArticles = ({ articles, categories, homepage }) => {
    return (
      <Layout categories={categories}>
        <Seo seo={homepage.attributes.seo} />
        
          
            <h1>Tous les articles</h1>
            <Allarticles articles={articles} />
          
        
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