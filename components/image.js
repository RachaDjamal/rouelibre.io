import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes
  
  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <NextImage
      loader={loader}
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
      unoptimized='true'
      className='articleImage'
    />
  )
}

export default Image
