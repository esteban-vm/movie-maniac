import Link from 'next/link'
import Image from 'next/image'
import { Fire, GlowingStart, PartyingFace } from '@/images'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between border-b border-white/40 px-8 py-3'>
      <h1 className='text-3xl font-semibold text-yellow-500'>Movie Maniac</h1>
      <div className='flex items-center'>
        <Link href='/' className='flex items-center px-4 py-0 text-xl font-medium text-white'>
          Popular <Image src={Fire} alt='fire emoji' className='ml-2 size-6' />
        </Link>
        <Link href='/' className='flex items-center px-4 py-0 text-xl font-medium text-white'>
          Top Rated <Image src={GlowingStart} alt='glowing star emoji' className='ml-2 size-6' />
        </Link>
        <Link href='/' className='flex items-center px-4 py-0 text-xl font-medium text-white'>
          Upcoming <Image src={PartyingFace} alt='partying face emoji' className='ml-2 size-6' />
        </Link>
      </div>
    </nav>
  )
}
