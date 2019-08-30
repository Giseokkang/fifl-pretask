import React from "react";
import styled, { keyframes } from "styled-components";

const slide = keyframes`
    from {
        transform: translateX(400px)
    }
    to {
    }
`;

const Container = styled.div`
  max-width: 500px;
`;

const Image = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
  width: 450px;
  height: 450px;
`;

const ShowImage = styled.div`
  animation: ${slide} 0.5s linear;
  width: 500px;
  height: 500px;
  display: ${props => (props.current ? "block" : "none")};
`;

const Slider = ({ photos, photoIndex, handleNextClick, handlePrevClick }) => (
  <Container>
    {photos &&
      photos.length > 0 &&
      photos.map((photo, index) => (
        <ShowImage key={photo.id} current={index === photoIndex}>
          <Image imageUrl={photo.imageUrl} />
          <button onClick={handlePrevClick}>←</button>
          <span>{photo.title}</span>
          <button onClick={handleNextClick}>→</button>
        </ShowImage>
      ))}
  </Container>
);

export default Slider;
