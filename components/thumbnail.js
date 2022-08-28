import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Thumbnail = ({ image, style }) => {
  //const { url, alternativeText, width, height } = image.data.attributes

  const url = image.data.attributes.formats.small.url;
  const alternativeText = image.data.attributes.alternativeText;
  const width = image.data.attributes.formats.small.width;
  const height = image.data.attributes.formats.small.height;

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
      src={url}
      alt={alternativeText || ""}
      unoptimized='true'
      className='thumbnailImage'
    />
  )
}

export default Thumbnail
