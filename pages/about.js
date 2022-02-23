import React from "react"
import Link from "next/link"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const About = ({ categories, homepage }) =>{
    return (
      <Layout categories={categories}>
        <Seo seo={homepage.attributes.seo} />
        
          <div className="uk-container">
            <h1>À propos :</h1>
            
          </div>
        
      </Layout>
    )
  }

  export async function getStaticProps() {
    // Run API calls in parallel
    const [ categoriesRes, homepageRes] = await Promise.all([
      fetchAPI("/categories", { populate: "*" }),
      fetchAPI("/homepage", {
        populate: {
          seo: { populate: "*" },
        },
      }),
    ])
    
    return {
      props: {
        categories: categoriesRes.data,
        homepage: homepageRes.data,
      },
      revalidate: 1,
    }
  }

  export default About