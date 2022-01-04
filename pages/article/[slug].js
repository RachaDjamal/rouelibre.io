import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import 'moment/locale/fr'

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)
  
  const source = article.attributes.content;
  
  //console.log(date)
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <NextImage image={article.attributes.image} />
      <div>
        <h1>{article.attributes.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {source}
            </ReactMarkdown>
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.attributes.writer.data.attributes.avatar && (
                <NextImage image={article.attributes.writer.data.attributes.avatar} />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.attributes.writer.data.attributes.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment locale='fr' format="[Le ]Do MMMM YYYY">
                  {article.attributes.publishedAt}
                </Moment>
              </p>
            </div>
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
