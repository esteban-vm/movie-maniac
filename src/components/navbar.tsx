import type { StaticImageData } from 'next/image'
import type { MovieListName } from '@/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Fire, GlowingStart, PartyingFace } from '@/images'

interface NavLinkProps {
  title: MovieListName
  image: StaticImageData
  alt: string
}

function NavLink({ title, image, alt }: NavLinkProps) {
  return (
    <Link href={title === 'popular' ? '/' : `/${title}`} className='inline capitalize hover:opacity-85'>
      {title.replace('_', ' ')}
      <Image
        src={image}
        alt={`${alt} emoji`}
        className='ml-1 inline size-3 select-none align-middle sm:size-4 md:size-5'
      />
    </Link>
  )
}

const links: NavLinkProps[] = [
  { title: 'popular', image: Fire, alt: 'fire' },
  { title: 'top_rated', image: GlowingStart, alt: 'glowing star' },
  { title: 'upcoming', image: PartyingFace, alt: 'partying face' },
]

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between'>
      <h1 className='text-base font-semibold text-yellow-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
        Movie Maniac
      </h1>
      <div className='flex gap-2 text-xs sm:gap-3 sm:text-sm md:gap-4 md:text-base'>
        {links.map((link) => (
          <NavLink key={crypto.randomUUID()} {...link} />
        ))}
      </div>
    </nav>
  )
}
