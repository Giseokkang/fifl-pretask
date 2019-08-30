import React from "react";
import styled from "styled-components";
import DeleteImage from "../Components/DeleteImage";
import Slider from "../Components/Slider";
import photos from "../Photos";

const Container = styled.div``;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos,
      searchTerm: "",
      photoIndex: 0
    };
    this.tm = null;
  }

  handleNextClick = () => {
    const { photos, photoIndex } = this.state;
    if (photos.length - 1 === photoIndex) {
      this.setState({
        photoIndex: 0
      });
    } else {
      this.setState({
        photoIndex: photoIndex + 1
      });
    }
  };

  handlePrevClick = () => {
    const { photos, photoIndex } = this.state;
    if (photoIndex === 0) {
      this.setState({
        photoIndex: photos.length - 1
      });
    } else {
      this.setState({
        photoIndex: photoIndex - 1
      });
    }
  };

  photoIndexIncrease = () => {
    const { photos, photoIndex } = this.state;
    this.setState({
      photoIndex: photoIndex + 1
    });
    if (photos.length - 1 === photoIndex) {
      this.setState({
        photoIndex: 0
      });
    } else {
      this.setState({
        photoIndex: photoIndex + 1
      });
    }
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
    this.tm = setInterval(this.photoIndexIncrease, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.tm);
  }

  render() {
    const { photos, searchTerm, photoIndex } = this.state;
    const { updateTerm, handleSubmit, handleNextClick, handlePrevClick } = this;
    return (
      <Container>
        <h2>Carousel</h2>
        <Slider
          photos={photos}
          photoIndex={photoIndex}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
        <DeleteImage
          searchTerm={searchTerm}
          updateTerm={updateTerm}
          handleSubmit={handleSubmit}
        />
      </Container>
    );
  }
}
