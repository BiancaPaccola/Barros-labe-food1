import { useNavigate } from "react-router-dom";
import { Backgroud } from "./HomeStyled";
import Logo from "../../img/logo-future-eats.png";
import { goToLogin } from "../../routes/coordinator";

export const HomePage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    goToLogin(navigate);
  }, 4000);

  return (
    <Backgroud>
      <div>
        {setTimeout}
        <img src={Logo} alt="Logo Ifuture"></img>
      </div>
    </Backgroud>
  );
};
