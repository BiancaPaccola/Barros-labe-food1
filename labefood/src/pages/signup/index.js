import LogoInvert from "../../img/logo-future-eats-invert.png";
import { SignupContainer } from "./SignupStyled";
import { useForm } from "../../hooks/use-form";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Coordinator from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Button, Divider } from "@chakra-ui/react";
import {
  CpfInput,
  EmailInput,
  NameInput,
  PasswordInput,
} from "../../components/inputs";
import { BASE_URL } from "../../constants";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  //--- Estados com valores booleanos para a validação do dados preenchidos no form
  const [isEmailValid, setIsEmailValid] = useState(undefined);
  const [isNameValid, setIsNameValid] = useState(undefined);
  const [isCpfValid, setIsCpfValid] = useState(undefined);
  const [isPasswordValid, setIsPasswordValid] = useState(undefined);

  //--- Estados para confirmação de senha, não vai para a requisição
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    //testes do formulário para não enviar o cadastro incompleto
    setIsPasswordConfirmValid(passwordConfirm === form.password ? true : false);
    setIsPasswordValid(true);
    setIsEmailValid(
      form.email === ""
        ? "true"
        : /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email)
    );
    setIsNameValid(
      form.name === "" ? "true" : /[A-Za-z]* [A-Za-z]{2,15}$/.test(form.name)
    );
    setIsCpfValid(
      form.cpf === "" ? "true" : /^(\d{3})(\d{3})(\d{3})(\d{2})$/.test(form.cpf)
    );
    setIsPasswordValid(
      form.password === "" ? "true" : /^.{6,15}$/.test(form.password)
    );
    setIsPasswordConfirmValid(passwordConfirm === form.password ? true : false);
  }, [form, passwordConfirm]);

  //---Lógica para o 'olho' da senha
  const [showPassword, setShowPassword] = useState(false); //primeira senha
  const handleClickEye = () => setShowPassword(!showPassword);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false); //segunda senha
  const handleClickEyeConfirm = () =>
    setShowPasswordConfirm(!showPasswordConfirm);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      isEmailValid &&
      isNameValid &&
      isCpfValid &&
      isPasswordValid &&
      isPasswordConfirmValid
    ) {
      //--- Requisição para criar um novo cadastro
      axios
        .post(`${BASE_URL}/rappi4A/signup`, form)
        .then((response) => {
          Coordinator.goToAdressRegistration(navigate);
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
          alert(
            "Erro ao processar sua requisição: " + error.response.data.message
          );
        });
    }
  };

  return (
    <SignupContainer>
      <button
        className="go-back-button"
        onClick={() => Coordinator.goBack(navigate)}
      >
        <FiChevronLeft />
      </button>
      <Divider />
      <img src={LogoInvert} alt="logo da Future Eats" />

      <h2>Cadastrar</h2>

      <form onSubmit={handleSubmit}>
        <NameInput
          isValid={isNameValid}
          value={form.name}
          onChange={onChange}
        />

        <EmailInput
          isValid={isEmailValid}
          value={form.email}
          onChange={onChange}
        />

        <CpfInput isValid={isCpfValid} value={form.cpf} onChange={onChange} />

        <PasswordInput
          isValid={isPasswordValid}
          label={"Senha*"}
          placeholder={"Mínimo 6 caracteres"}
          value={form.password}
          onChange={onChange}
          showPassword={showPassword}
          handleClick={handleClickEye}
          errorMessage={"Mínimo de 6 caracteres..."}
        />

        <PasswordInput
          isValid={isPasswordConfirmValid}
          label={"Confirmar*"}
          placeholder={"Confirme a senha anterior."}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          showPassword={showPasswordConfirm}
          handleClick={handleClickEyeConfirm}
          errorMessage={"Deve ser a mesma que a anterior!"}
        />

        <Button type="submit" colorScheme="red" variant="solid">
          Criar
        </Button>
      </form>
    </SignupContainer>
  );
};
