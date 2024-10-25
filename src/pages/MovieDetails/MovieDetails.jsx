import React from 'react';
import { FaStar } from "react-icons/fa";
import CastSlider from '../../UI/CastSlider';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useMovieDetails, useMovieCredits } from '../../hooks/useMovies';
import LoaderComponent from '../../UI/Loader/LoaderComponent';
const CoverImg = styled.div`
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 68vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-image: url(${props => props.imgUrl}); // Access props here
`
const DetailChips=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;

`
const GlassElement = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(255, 255, 255, 0.1); // Gradient + glass effect
  backdrop-filter: blur(5px);
  z-index: 100;
  padding: 2rem;
  border-radius: 25px;
  max-width: 90%;
  width: 55rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

export default function MovieDetails() {
  const { id } = useParams();
  const baseImageUrl = 'https://image.tmdb.org/t/p/original';
  const { 
    data: movieDetails, 
    isLoading: isLoadingDetails, 
    error: errorDetails 
  } = useMovieDetails(id);

  const { 
    data: movieCredits, 
    isLoading: isLoadingCredits, 
    error: errorCredits 
  } = useMovieCredits(id);

  if (isLoadingDetails) return <LoaderComponent/>;


  return (
    <div style={{display:'flex',
      flexDirection:'column',
    
      justifyContent:'center',
      width:'100%',
      gap:'1.5rem'
    }}>
     
      <CoverImg imgUrl={`${baseImageUrl}${movieDetails?.backdrop_path}`}>

        <GlassElement>{movieDetails?.title}
         <DetailChips>

           <div style={{backgroundColor:'#845EC2',
               textAlign:'center',
               borderRadius:'12px',
               paddingTop:'0.5rem',
               paddingRight:'0.7rem',
               paddingLeft:'0.7rem',
               paddingBottom:'0.5rem',
               width:'7rem'
           }}>
            {movieDetails?.genres[0].name}
           </div>
           <div style={{backgroundColor:'#845EC2',
               textAlign:'center',
               borderRadius:'12px',
               paddingTop:'0.5rem',
               paddingRight:'0.7rem',
               paddingLeft:'0.7rem',
               paddingBottom:'0.5rem',
               width:'7rem'
           }}>
            {movieDetails?.runtime} min
           </div><div style={{backgroundColor:'#845EC2',
               textAlign:'center',
               borderRadius:'12px',
               paddingTop:'0.5rem',
               paddingRight:'0.7rem',
               paddingLeft:'0.7rem',
               paddingBottom:'0.5rem',
               width:'7rem',
               display:'flex',
               alignItems:'center',
               justifyContent:'center',
               gap:'0.5rem'
           }}>
           <p style={{margin:'0'}}> {movieDetails?.vote_average} </p>
           <p style={{margin:'0'}}> <FaStar/></p>
           </div>

         </DetailChips>
         


        </GlassElement>



      </CoverImg>
      <div>
        <h2> Plot</h2>
        {movieDetails?.overview}
      </div>
    
     <div style={{display:'flex',
   
      alignItems:'center',
    justifyContent:'flex-start',
     width:'100%'
    }}> <h2 style={{textAlign:'left'}}>Cast</h2> </div>
      <CastSlider cast={movieCredits?.cast}/>
      
      
    </div>
  );
}