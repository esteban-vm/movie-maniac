import Image from 'next/image'
import { Fire } from '@/images'

export default function MovieList() {
  return (
    <section className=''>
      <header className='mb-1 flex items-center justify-between px-8 py-3'>
        <h2 className='flex items-center text-2xl font-semibold text-yellow-500'>
          Popular <Image src={Fire} alt='fire emoji' className='ml-2 size-6' />
        </h2>
        <div className='flex items-center'>
          <ul className='flex flex-row items-center text-base'>
            <li className='cursor-pointer border-b border-white/40 px-3 py-1 font-medium'>8+ Star</li>
            <li className='cursor-pointer px-3 py-1'>7+ Star</li>
            <li className='cursor-pointer px-3 py-1'>6+ Star</li>
          </ul>
          <select
            name=''
            id=''
            className='mx-3 my-0 h-8 rounded-md border-none px-1 py-0 text-base font-medium text-black outline-none'
          >
            <option value=''>Sort By</option>
            <option value=''>Date</option>
            <option value=''>Rating</option>
          </select>
          <select
            name=''
            id=''
            className='mx-3 my-0 h-8 rounded-md border-none px-1 py-0 text-base font-medium text-black outline-none'
          >
            <option value=''>Ascending</option>
            <option value=''>Descending</option>
          </select>
        </div>
      </header>
      <div></div>
    </section>
  )
}
