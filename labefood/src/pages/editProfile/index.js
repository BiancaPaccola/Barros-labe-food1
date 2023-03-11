import { useState } from "react";
import { EditProfileContainer } from "./style";
import { useForm } from "../../hooks/use-form";
import axios from "axios";
import * as Coordinator from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { Button } from "@chakra-ui/react";

import { CpfInput, EmailInput, NameInput } from "../../components/inputs";
import { appName, BASE_URL } from "../../constants";

export const EditProfilePage = () => {
  const navigate = useNavigate();
  const [form, onChange, clearInputs] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCpfValid, setIsCpfValid] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setIsEmailValid(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email));
    setIsNameValid(/[A-Za-z]* [A-Za-z]{2,}$/.test(form.name));
    setIsCpfValid(
      /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/.test(form.cpf)
    );

    axios
      .put(`${BASE_URL}/${appName}/profile`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        Coordinator.goToProfile(navigate);
      })
      .catch((er) => {
        alert(er.response.data.message);
      });
  };
  return (
    <EditProfileContainer>
      <button
        className="go-back-button"
        onClick={() => Coordinator.goBack(navigate)}
      >
        <FiChevronLeft />
      </button>

      <h2>Editar</h2>

      <form onSubmit={onSubmit}>
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

        <Button type="submit" colorScheme="red" variant="solid" color="black">
          Salvar
        </Button>
      </form>
    </EditProfileContainer>
  );
};
