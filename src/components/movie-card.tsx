import type { Movie } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { Star } from '@/images'

export default function MovieCard({ id, poster_path, original_title, release_date, vote_average, overview }: Movie) {
  return (
    <Link
      href={`/${id}`}
      className='relative mx-auto h-96 w-3/4 overflow-hidden rounded-md border-2 border-yellow-500 transition-all hover:opacity-90 active:scale-95 sm:mx-0 sm:w-full'
      title={original_title}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt='poster'
        className='w-full contrast-125'
        width={500}
        height={750}
      />
      <div className='absolute top-0 size-full bg-gradient-to-t from-black to-transparent' />
      <div className='absolute top-0 flex h-full flex-col justify-end p-2 text-xs'>
        <h3 className='text-base font-semibold text-yellow-500'>{original_title}</h3>
        <div className='flex w-full items-center justify-between font-medium text-yellow-500'>
          <span>{release_date}</span>
          <span>
            {vote_average} <Image src={Star} alt='rating icon' className='inline w-[0.6rem] align-baseline' />
          </span>
        </div>
        <p className='line-clamp-3 text-justify italic tracking-wide'>{overview}</p>
      </div>
    </Link>
  )
}
