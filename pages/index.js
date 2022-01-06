import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      
        
          <h1>{homepage.attributes.hero}</h1>
          <hr></hr>
          <p>Ce site est actuellement en cours de construction mais sa première version sera viable très prochainement. 🚀</p>
          <p>Faites moi un coucou ici : <a href="mailto:contact@rouelibre.io">👋</a></p>
          {/* <Articles articles={articles} /> */}
        
      
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

export default Home
