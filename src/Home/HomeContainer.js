import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  {
    id: 1,
    title: "사진 1",
    imageUrl: "https://picsum.photos/id/1/400/300"
  },
  {
    id: 2,
    title: "사진 2",
    imageUrl: "https://picsum.photos/id/2/400/300"
  },
  {
    id: 3,
    title: "사진 3",
    imageUrl: "https://picsum.photos/id/3/400/300"
  },
  {
    id: 4,
    title: "사진 4",
    imageUrl: "https://picsum.photos/id/4/400/300"
  },
  {
    id: 5,
    title: "사진 5",
    imageUrl: "https://picsum.photos/id/5/400/300"
  }
];

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
  width: 500px;
  height: 500px;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      searchTerm: ""
    };
  }

  next = () => {
    this.slider.slickNext();
    this.slider.slickPlay();
  };

  previous = () => {
    this.slider.slickPrev();
    this.slider.slickPlay();
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  searchByTerm(term) {
    const { photos } = this.state;
    const parsedTerm = Number(term);

    const editedPhotos = photos.filter(photo => photo.id !== parsedTerm);
    this.setState({
      photos: editedPhotos,
      searchTerm: ""
    });
  }

  componentDidMount() {
    this.setState({
      photos
    });
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false
    };
    const { photos, searchTerm } = this.state;
    const { updateTerm, handleSubmit, previous, next } = this;
    return (
      <Container>
        <h2>Carousel</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {photos &&
            photos.length > 1 &&
            photos.map(photo => (
              <div key={photo.id}>
                <Image imageUrl={photo.imageUrl} />
                <button type="button" onClick={previous}>
                  ←
                </button>
                <span>{photo.title}</span>
                <button type="button" onClick={next}>
                  →
                </button>
              </div>
            ))}
        </Slider>
        <h3>이미지 삭제</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="deleteBtn">id: </label>
          <input
            type="number"
            id="deleteBtn"
            value={searchTerm}
            onChange={updateTerm}
          />
          <input type="submit" />
        </form>
      </Container>
    );
  }
}
