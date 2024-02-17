import { MovieList, MovieCard } from '@/components'

const txt3 =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dignissimos earum laudantium unde suscipit? Eum natus sequi nostrum pariatur? Odio ut delectus, aliquam deserunt fugit non illum quo harum quos voluptatem repellat sit deleniti obcaecati, similique molestias maxime? Hic illo saepe eum enim quisquam iusto tempore quidem itaque! Quaerat, repudiandae.'

export default function Home() {
  return (
    <MovieList>
      {Array(6)
        .fill(null)
        .map(() => (
          <MovieCard key={crypto.randomUUID()} image='test' text={txt3} />
        ))}
    </MovieList>
  )
}
