import styled from "styled-components";

export const LoginPageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 1.625rem;


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
    margin-bottom: 5rem;

    button {
      width: 100%;
      padding: 0.75rem 1rem;
       color: black;
       margin-top: 1rem;
    }

    input {
      margin: 1rem 0 0;
      position: relative;
      z-index: 1;
      border-color: #b8b8b8;
      height: 3.5rem;
     
    }

    label {
      position: absolute;
      top: 3%;
      left: 5%;
      background-color: white;
      z-index: 2;
      color: #b8b8b8;
      padding-right:10px;
    }
  }`;
    
