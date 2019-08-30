import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const DeleteImage = ({ handleSubmit, searchTerm, updateTerm }) => (
  <Container>
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

export default DeleteImage;
