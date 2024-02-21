import type { StaticImageData } from 'next/image'
import type { MovieListName } from '@/utils'
import Image from 'next/image'

export interface ListTitleProps {
  title: MovieListName
  image: StaticImageData
  alt: string
  className: string
}

export default function ListTitle({ title, image, alt, ...rest }: ListTitleProps) {
  return (
    <>
      {title.replace('_', ' ')}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image src={image} alt={`${alt} emoji`} {...rest} />
    </>
  )
}
