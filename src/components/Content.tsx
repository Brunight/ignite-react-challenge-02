import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface Props {
  movies: MovieProps[];
  genreTitle: string;
}

export const Content: React.FC<Props> = ({ movies, genreTitle }) => {
  return (

    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genreTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}