import type { StaticImageData } from 'next/image'
import type { PageNames } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { Fire, GlowingStart, PartyingFace } from '@/images'

interface NavLinkProps {
  title: (typeof PageNames)[number]
  image: StaticImageData
  link: string
  alt: string
}

function NavLink({ title, image, link, alt }: NavLinkProps) {
  return (
    <Link href={link} className='inline hover:opacity-85'>
      {title}
      <Image
        src={image}
        alt={`${alt} emoji`}
        className='ml-1 inline size-3 select-none align-middle sm:size-4 md:size-5'
      />
    </Link>
  )
}

const links: NavLinkProps[] = [
  { title: 'Popular', image: Fire, link: '/', alt: 'fire' },
  { title: 'Top Rated', image: GlowingStart, link: '/', alt: 'glowing star' },
  { title: 'Upcoming', image: PartyingFace, link: '/', alt: 'partying face' },
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
