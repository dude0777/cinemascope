import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, searchMovies, getMovieDetails, getMovieCredits, getMovieVideos,getTopRated,getUpcoming ,getNowplaying} from "../api/services";

export const usePopularMovies = (page = 1) => {
  return useQuery({
    queryKey: ['popularMovies', page],
    queryFn: () => getPopularMovies(page),
    staleTime: 5 * 60 * 1000, 
    keepPreviousData: true,
  });
};

export const useNowplaying = (page = 1) => {
  return useQuery({
    queryKey: ['nowPlayingMovies', page],
    queryFn: () => getNowplaying(page),
    staleTime: 5 * 60 * 1000, 
    keepPreviousData: true,
  });
};

export const useUpcomingMovies = (page = 1) => {
  return useQuery({
    queryKey: ['upcomingMovies', page],
    queryFn: () => getUpcoming(page),
    staleTime: 5 * 60 * 1000, 
    keepPreviousData: true,
  });
};
export const useTopRatedMovies = (page = 1) => {
  return useQuery({
    queryKey: ['topRated', page],
    queryFn: () => getTopRated(page),
    staleTime: 5 * 60 * 1000, 
    keepPreviousData: true,
  });
};

export const useMovieSearch = (query, page = 1) => {
  return useQuery({
    queryKey: ['movieSearch', query, page],
    queryFn: () => searchMovies(query, page),
    enabled: !!query,
    keepPreviousData: true,
  });
};

export const useMovieDetails = (movieId) => {
  return useQuery({
    queryKey: ['movieDetails', movieId],
    queryFn: () => getMovieDetails(movieId),
    enabled: !!movieId,
  });
};

export const useMovieCredits = (movieId) => {
  return useQuery({
    queryKey: ['movieCredits', movieId],
    queryFn: () => getMovieCredits(movieId),
    enabled: !!movieId,
  });
};

export const useMovieVideos = (movieId) => {
  return useQuery({
    queryKey: ['movieVideos', movieId],
    queryFn: () => getMovieVideos(movieId),
    enabled: !!movieId,
  });
};
