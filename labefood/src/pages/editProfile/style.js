import styled from "styled-components";

export const EditProfileContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 1.625rem;
  h2 {
    font-family: roboto;
    font-weight: bold;
  }

  .go-back-button {
    align-self: flex-start;
    margin: 1.44rem 20.06rem 1rem 1rem;
  }

  .go-back-button svg {
    width: 1.44rem;
    height: 1.5rem;
  }

  img {
    width: 6.5rem;
    height: 3.625rem;
    margin: 1.5rem 8rem 1rem;
    object-fit: contain;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: center;
    padding: 0.75rem 2rem;
  }

  form {
    width: 22.5rem;

    button {
      width: 100%;
    }

    input {
      margin: 0.5rem 0 0;
      position: relative;
      z-index: 1;
      margin-bottom: 0.5rem;
      border-color: #b8b8b8;
    }

    label {
      position: absolute;
      top: -6%;
      left: 5%;
      background-color: white;
      z-index: 2;
      color: #b8b8b8;
      padding-right: 10px;
    }

    p {
      margin: 1% 0;
    }
  }
`;
