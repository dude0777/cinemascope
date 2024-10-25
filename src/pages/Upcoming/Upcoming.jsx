import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useUpcomingMovies } from "../../hooks/useMovies";
import MovieCard from "../../UI/MovieCard";
import LoaderComponent from '../../UI/Loader/LoaderComponent';
const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
`;

const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Upcoming() {
  const { data, isLoading, error } = useUpcomingMovies();

  if (isLoading) return <LoaderComponent/>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    
    <MovieGrid>
      
      {data?.results?.map((movie) => (
        <MovieLink to={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard
            imageUrl={movie.poster_path}
            category="Movie"
            title={movie.title}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
          />
        </MovieLink>
      ))}
    </MovieGrid>
  );
}