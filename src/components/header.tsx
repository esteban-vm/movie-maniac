import type { MovieListName } from '@/utils'
import { ListTitle } from '@/common'
import { SmilingFace } from '@/images'

function RatingList() {
  return (
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
  )
}

function SelectBox({ options }: { options: string[] }) {
  return (
    <select className='bg-yellow-500 font-semibold capitalize text-black outline-none hover:opacity-85 md:px-3 md:py-1'>
      {options.map((option) => (
        <option key={crypto.randomUUID()} value='' className='font-medium uppercase'>
          {option}
        </option>
      ))}
    </select>
  )
}

export default function Header(props: { title: MovieListName }) {
  return (
    <header className='flex items-center justify-between text-sm sm:text-sm md:text-base'>
      <h2 className='text-sm font-medium capitalize text-yellow-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
        <ListTitle
          image={SmilingFace}
          alt='smiling face'
          className='ml-1 inline size-4 select-none align-text-top sm:size-5 md:size-6 lg:size-6 xl:size-7'
          {...props}
        />
      </h2>
      <div className='flex gap-2 sm:gap-3 md:gap-4'>
        <RatingList />
        <SelectBox options={['sort by', 'date', 'rating']} />
        <SelectBox options={['ascending', 'descending']} />
      </div>
    </header>
  )
}
