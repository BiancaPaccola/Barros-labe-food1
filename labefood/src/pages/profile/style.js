import styled from "styled-components"

export const ProfileContainer = styled.main`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    min-height: 100vh;
    padding: 0 0 1.625rem;
    h1, h2, h3{
        font-family: "Roboto", sans-serif;
    }
    `
export const UserAddress = styled.div`
    background-color: #eee;
    display:flex;
    justify-content:space-between;
    padding:0 20px;
    
p{
    color: #b8b8b8;
    padding: 10px 0
}

`
export const UserRequests = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding:10px;
section{
    padding:20px;
}
`


export const UserInfo = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
    button{
        margin-bottom:40px;
    }
`

export const Spin = styled.div`
    margin: 0 auto;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: radial-gradient(farthest-side,#E8222E 94%,#0000) top/9px 9px no-repeat,
            conic-gradient(#0000 30%,#E8222E);
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
    animation: spinner-c7wet2 1s infinite linear;

    @keyframes spinner-c7wet2 {
    100% {
        transform: rotate(1turn);
    }
}
`

export const Erro=styled.h4`
    font-family: Roboto;
    text-align: center;

`

export const CardHistory=styled.section`
  width: 20.5rem;
  height: 6.375rem;
  margin: 0.438rem 0 0;
  padding: 1rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;

  p{
  width: 18.5rem;
  height: 1.125rem;
  margin: 0 0 0.563rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color:#e8222e ;
  }

  h2{
  width: 18.5rem;
  height: 1.125rem;
  margin: 0.563rem 0 0.438rem;
  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #000;
  }

  h3{
  width: 18.5rem;
  height: 1.125rem;
  margin: 0.438rem 0 0;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
 }
  
`