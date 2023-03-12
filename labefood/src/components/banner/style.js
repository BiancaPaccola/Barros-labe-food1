import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7.375rem;
  margin: 6.188rem 0 3.063rem;
  padding: 1.5rem;
  background-color: #e8222e;
  position: fixed;
  bottom: 0;

  .info {
    margin: 0 auto;
  }

  .info p:nth-child(1) {
    width: 16rem;
    height: 1.125rem;
    margin: 0 0 0.125rem 1.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #fff;
  }

  .info p:nth-child(2) {
    width: 16rem;
    height: 1.125rem;
    margin: 0.5rem 0 0.5rem 1.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
  }

  .info p:nth-child(3) {
    width: 16rem;
    height: 1.125rem;
    margin: 0.5rem 0 0 1.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
  }
`;
