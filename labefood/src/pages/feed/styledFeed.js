import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
  min-height: 100%;
`;

export const Span = styled.span`
  width: 2.813rem;
  height: 1.188rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  margin: 3rem 4rem;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000;

  div {
    padding-top: 1.5%;
  }
`;

export const ConteinerInput = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  input {
    width: 20.5rem;
    height: 3.5rem;
    padding: 0.8rem 0.503rem 1rem 2rem;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    margin-bottom: 1rem;
  }
  img {
    position: absolute;
    top: 8.2rem;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: -11%;
    object-fit: contain;
  }
`;
export const CardRestaurant = styled.div`
  height: 12.25rem;
`;

export const Card = styled.div`
  width: 20.5rem;
  height: 11.75rem;
  padding: 0 0 0;
  border-radius: 8px;
  border: solid 1px #b8b8b8;

  img {
    width: 20.5rem;
    height: 7.5rem;
    margin: 0 0 0.75rem;
    object-fit: contain;
  }
`;

export const Restaurant = styled.p`
  width: 18.5rem;
  height: 1.125rem;
  margin: 0.75rem 1rem 0.25rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
`;

export const Detail = styled.span`
  display: flex;

  p {
    width: 9.25rem;
    height: 1.125rem;
    margin: 0.25rem 0.5rem 0 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }

  h6 {
    width: 8.75rem;
    height: 1.125rem;
    margin: 0.25rem 1rem 0 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #b8b8b8;
  }
`;

export const Erro = styled.h4`
  font-family: Roboto;
  text-align: center;
`;

export const Spin = styled.div`
  margin: 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #e8222e 94%, #0000) top/9px 9px
      no-repeat,
    conic-gradient(#0000 30%, #e8222e);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner-c7wet2 1s infinite linear;

  @keyframes spinner-c7wet2 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
