import styled from "styled-components";

export const CenteredPageContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 2px;
  padding: 10px;
  input,
  p {
    padding: 1.188rem 5rem 1.188rem 1rem;
    height: 3.5rem;
    margin-bottom: 1em;
    width: 20.5rem;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
