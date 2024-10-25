import { useNowplaying } from "../../hooks/useMovies";
import styled, { css } from 'styled-components';
import { useState } from "react";
import LoaderComponent from "../../UI/Loader/LoaderComponent";
const Slider=styled.div`
padding-top:3rem;
 height: 70vh;
 width: calc(100vw - 250px);
 position: relative;
 overflow: hidden;
`

const List=styled.div`

overflow: hidden;

  width: 100%;
  height: 100%;
`
const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  position: ${(props) => (props.isActive ? "relative" : "absolute")};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transform: ${(props) => (props.isActive ? "translateX(0)" : "translateX(-100px)")};
  transition: opacity 0.5s ease, transform 0.5s ease, visibility 0.5s ease;
`;


const Content = styled.div`
  width: 40%;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: ${(props) => (props.isActive ? "translateX(0)" : "translateX(-50px)")};
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: 100;
`;

const Description = styled.div`
  font-size: 0.9rem;
  color: #e3e0f3;
  width: 100%;
`;
const Arrow=styled.div`
position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
`
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const baseImageUrl = 'https://image.tmdb.org/t/p/original';

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data?.results?.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data?.results?.length - 1 : prev - 1));
  };

  const { data, isLoading, error } = useNowplaying();

  if (isLoading) return <LoaderComponent/>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <Slider>
        <Arrow direction="left" onClick={prevSlide}>{"<"}</Arrow>
        <List>
          {data?.results?.map((slide, index) => (
            <Item key={index} isActive={index === currentSlide}>
              <div style={{ width: '40%', height: '100%' }}>
                <img style={{ width: '100%', height: '100%' }} src={`${baseImageUrl}${slide.backdrop_path}`} alt={slide.title} />
              </div>
              <Content isActive={index === currentSlide}>
                <Title>{slide.title}</Title>
                <Description>{slide?.overview}</Description>
              </Content>
            </Item>
          ))}
        </List>
        <Arrow direction="right" onClick={nextSlide}>{">"}</Arrow>
      </Slider>
    </div>
  );
}
