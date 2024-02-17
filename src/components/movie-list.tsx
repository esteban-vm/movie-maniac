import type { ReactNode } from 'react'
import Image from 'next/image'
import { Fire } from '@/images'

interface SelectBoxProps {
  options: Capitalize<string>[]
}

function SelectBox({ options }: SelectBoxProps) {
  return (
    <select className='bg-yellow-500 font-semibold text-black outline-none hover:opacity-85 md:px-3 md:py-1'>
      {options.map((option) => (
        <option key={crypto.randomUUID()} value='' className='font-medium uppercase'>
          {option}
        </option>
      ))}
    </select>
  )
}

interface MovieListProps {
  children: ReactNode
}

export default function MovieList({ children }: MovieListProps) {
  return (
    <>
      <header className='flex items-center justify-between text-sm sm:text-sm md:text-base'>
        <h2 className='text-sm font-medium text-yellow-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
          Popular
          <Image
            src={Fire}
            width={480}
            alt='fire emoji'
            className='ml-1 inline size-4 select-none align-text-top sm:size-5 md:size-6 lg:size-6 xl:size-7'
          />
        </h2>
        <div className='flex gap-2 sm:gap-3 md:gap-4'>
          <ul className=''>
            {[8, 7, 6].map((item) => (
              <li
                key={crypto.randomUUID()}
                className='inline cursor-pointer align-text-top even:mx-2 hover:opacity-85 md:even:mx-4'
              >
                {item}+ Star
              </li>
            ))}
          </ul>
          <SelectBox options={['Sort By', 'Date', 'Rating']} />
          <SelectBox options={['Ascending', 'Descending']} />
        </div>
      </header>
      <div className='grid h-full gap-1 py-2 sm:grid-cols-2 sm:py-3 md:grid-cols-3 md:gap-2 md:py-3 lg:grid-cols-4 lg:py-4 xl:grid-cols-5 xl:py-5 2xl:grid-cols-6'>
        {children}
      </div>
    </>
  )
}
