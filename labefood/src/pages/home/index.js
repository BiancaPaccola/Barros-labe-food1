import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Backgroud } from "./HomeStyled";
import Logo from "../../img/logo-future-eats.png";
import { goToLogin } from "../../routes/coordinator";

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      goToLogin(navigate);
    }, 2300);
    return () => timer;
  }, []);

  return (
    <Backgroud>
      <div>
        <img src={Logo} alt="Logo Ifuture"></img>
      </div>
    </Backgroud>
  );
};
