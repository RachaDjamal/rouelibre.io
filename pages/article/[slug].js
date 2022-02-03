import Link from "next/link"
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/thumbnail"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import 'moment/locale/fr'

const Article = ({ article, categories }) => {
  const source = article.attributes.content;
  
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  const url = getStrapiMedia(article.attributes.image);
  const avatar = getStrapiMedia(article.attributes.writer.data.attributes.avatar);

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />

      <div className="uk-container">
        <h1 className="uk-text-center" id="title">{article.attributes.title}</h1>
        <div className="uk-text-center">
          {categories.data.map((category) => {
                            return (
                              <span className="uk-label" key={category.id} id={category.attributes.slug}>
                                <Link href={`/category/${category.attributes.slug}`}>
                                  <a>{category.attributes.name}</a>
                                </Link>
                              </span>
                              )
                            })}
        </div>
        <p className="uk-text-center" id="description">{article.attributes.description}</p>
      </div>
      <div className="uk-height-large uk-background-cover uk-light uk-flex" data-uk-parallax="bgy: -400; media: @m;" style={{backgroundImage: " url(" + url + ")"}}>
      </div>
      <div className="uk-container">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {source}
        </ReactMarkdown>
        <hr className="uk-divider-small" />
        <div className="uk-grid uk-flex-middle" data-uk-height-match="target: > div > .uk-border-circle" data-uk-grid>
          <div>
              <img src={avatar} alt="Image" className="uk-border-circle" height="70px" width="70px" />
          </div>
          <div>
              <p>Par {article.attributes.writer.data.attributes.name}<br></br><Moment className="uk-text-meta" locale='fr' format="[Le ]Do MMMM YYYY">
                  {article.attributes.publishedAt}
                </Moment></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: {
      article: '*',
      writer: {
        populate: ['avatar'],
      },
      image: '*',
    },
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default Article
