import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;

  header {
    width: 5.688rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
    margin: 1.25rem 5.75rem 0 5.813rem;
  }

  .address {
    width: 22.5rem;
    height: 4.75rem;
    margin: 0.063rem 0 0.5rem;
    padding: 1rem;
    background-color: #eee;
  }

  .address p:nth-child(1) {
    width: 20.5rem;
    height: 1.125rem;
    margin: 0 0 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }

  .address p:nth-child(2) {
    width: 20.5rem;
    height: 1.125rem;
    margin: 0.5rem 0 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
  }

  .title h2 {
    width: 18.5rem;
    height: 1.125rem;
    opacity: 0.89;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
  }

  .price-container {
    margin-top: 2rem;
    width: 85vw;
    display: flex;
    align-items: flex-end;
    height: 4rem;
    justify-content: space-between;
  }

  .subtotal {
    width: 10.25rem;
    height: 1.125rem;
    letter-spacing: -0.39px;
  }

  .subtotal p {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: -0.39px;
    color: #000;
  }

  .price p:nth-child(1) {
    width: 6.5rem;
    height: 1.125rem;
    margin: 2.063rem 0rem 0rem 3.75rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #000;
  }

  .price p:nth-child(2) {
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1.125rem;
    font-weight: bold;
    letter-spacing: -0.43px;
    text-align: right;
    color: #e8222e;
    margin-top: 0.875rem;
  }

  .payment-title {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 85vw;
  }

  .payment-title p {
    width: 20.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
  }

  .line {
    width: 20.5rem;
    height: 0.063rem;
    margin: 0.5rem 1rem;
    border: solid 1px #000;
  }

  .checkbox {
    display: flex;
    width: 85vw;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .checkbox input {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 100%;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .submit-button {
    display: flex;
    width: 85vw;
    align-items: center;
    margin-top: 1rem;
  }

  .submit-button button {
    width: 100%;
    color: #000;
  }

  .rest-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .rest-info h2 {
    width: 20.5rem;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
  }

  .rest-info p {
    width: 20.5rem;
    height: 1.125rem;
    margin: 0.5rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }
`;
