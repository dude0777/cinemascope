import React from 'react';
import styled, { css } from 'styled-components';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CardStyles = css`
  font-family: 'Roboto Slab', serif;
  margin-right: 25px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #1c1e2d;
  width: 15rem;
  height: 23rem; 
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);

    .card__img--hover {
      height: 100%;
      opacity: 0.3;
    }

    .card__info {
      background-color: transparent;
      position: relative;
    }

    .card__info-hover {
      opacity: 1;
    }
  }
`;

const Card = styled.article`
  ${CardStyles}
  display: flex;
  flex-direction: column;
`;

const CardInfoHover = styled.div`
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
`;

const CardImg = styled.div`
  visibility: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const CardImgHover = styled.div`
  transition: 0.2s all ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  top: 0;
  background-image: url(${(props) => props.backgroundImage});
`;

const CardInfo = styled.div`
  z-index: 2;
  background-color: #1c1e2d;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardCategory = styled.span`
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
`;

const CardTitle = styled.h3`
  color: white;
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: 'Roboto Slab', serif;
  /* flex-grow: 1; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardReleaseDate = styled.span`
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: #868686;
`;

const RatingCircleFill = styled.circle`
  fill: none;
  stroke: ${(props) => props.color}; 
  stroke-width: 4.8;
  stroke-dasharray: 0, 100; 
  transition: stroke-dasharray 0.7s ease-in-out;

  ${Card}:hover & {
    stroke-dasharray: ${(props) => props.ratingPercent}, 100; 
  }
`;

const RatingText = styled.text`
  fill: white;
  font-size: 12px;
  transform: rotate(90deg) translate(0, -37px);
`;

const CardLike = styled.svg`
  width: 18px;
`;

const RatingCircle = styled.svg`
  width: 50px;
  height: 50px;
  transform: rotate(-90deg);
  float: right;
`;

const RatingCircleBg = styled.circle`
  fill: none;
  stroke: white;
  stroke-width: 3.8;
`;

export default function MovieCard({ imageUrl, category, title, releaseDate, rating }) {
  const ratingPercent = (rating / 10) * 100;
  const ratingColor = ratingPercent <= 20 ? '#ff4545' : ratingPercent <= 60 ? '#ffa534' : '#4CAF50';
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  const fullImageUrl = `${baseImageUrl}${imageUrl}`;

  return (
    <Card className="card">
      <CardInfoHover className="card__info-hover">
        <CardLike viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
          />
        </CardLike>
        <RatingCircle viewBox="0 0 36 36">
          <RatingCircleBg cx="18" cy="18" r="16" color={ratingColor} />
          <RatingCircleFill ratingPercent={ratingPercent} color={ratingColor} cx="18" cy="18" r="16" />
          <RatingText x="18" y="22" textAnchor="middle" dominantBaseline="middle">
            {Math.round(ratingPercent)}%
          </RatingText>
        </RatingCircle>
      </CardInfoHover>
      <CardImg className="card__img" />
      <CardImgHover className="card__img--hover" backgroundImage={fullImageUrl} />
      <CardInfo className="card__info">
        
        <CardTitle className="card__title">{title}</CardTitle>
        <CardReleaseDate className="card__release-date">Release Date: {releaseDate}</CardReleaseDate>
      </CardInfo>
    </Card>
  );
}