import styled from 'styled-components';

const CastSliderContainer = styled.div`
  width: calc(100vw - 270px);
  
  overflow-x: scroll; /* Keeps the scroll functionality */
  white-space: nowrap; /* Prevents wrapping, keeps cast in a row */
  display: flex;
  scroll-snap-type: x mandatory; /* Enable snapping */
  padding: 1rem;
  gap: 1rem;
  scrollbar-width: none; /* Hides scrollbar in Firefox */
  -ms-overflow-style: none;  /* Hides scrollbar in IE and Edge */


 
  overscroll-behavior-inline:contain;

  overflow-y: hidden;
`;

const CastCard = styled.div`
  display: inline-block; 
  scroll-snap-align: start; 
  width: 10rem;
  max-width: 10rem;
  text-align: center;
  padding: 10px;
 
  border-radius: 10px;
  background-color:  rgba(36, 38, 49, 0.4);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05); /* Slight enlarge effect on hover */
  }
`;

const CastImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`;

const CastName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export default function CastSlider({ cast }) {
  return (
    <CastSliderContainer>
      {cast?.map((member) => (
        <CastCard key={member?.id}>
          <CastImage src={`https://image.tmdb.org/t/p/w500/${member?.profile_path}`} alt={member?.name} />
          <CastName>{member?.name}</CastName>
        </CastCard>
      ))}
    </CastSliderContainer>
  );
}
