import Link from 'next/link'
import Image from 'next/image'
import { Star, Poster } from '@/images'

interface MovieCardProps {
  image: string
  text: string
}

export default function MovieCard({ text }: MovieCardProps) {
  return (
    <Link
      href='/'
      className='relative mx-auto h-96 w-3/4 overflow-hidden rounded-md border-2 border-yellow-500 transition-all hover:opacity-90 active:scale-95 sm:mx-0 sm:w-full'
    >
      <Image src={Poster} alt='poster' className='w-full contrast-125' />
      <div className='absolute top-0 size-full bg-gradient-to-t from-black to-transparent' />
      <div className='absolute top-0 flex h-full flex-col justify-end p-2 text-xs'>
        <h3 className='text-base font-bold text-yellow-500'>Movie Name</h3>
        <div className='flex w-full items-center justify-between font-medium text-yellow-500'>
          <span>10-20-2020</span>
          <span>
            8.0 <Image src={Star} alt='rating icon' className='inline w-[0.6rem] align-baseline' />
          </span>
        </div>
        <p className='line-clamp-2 italic tracking-wide'>{text}</p>
      </div>
    </Link>
  )
}
