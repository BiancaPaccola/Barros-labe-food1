import { useForm } from "../../hooks/use-form";
import { useState } from "react";
import * as Coordinator from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { AddressRegistrationContainer, Header, Form } from "./style";
import { Button, Divider } from "@chakra-ui/react";
import { appName, BASE_URL } from "../../constants";
import {
  CityInput,
  ComplementInput,
  NeighbourhoodInput,
  NumberInput,
  StateInput,
  StreetInput,
} from "../../components/inputs";
import { useProtectPage } from "../../hooks/useProtectPage";
import axios from "axios";

export const EditAddress = () => {
  useProtectPage();
  const navigate = useNavigate();
  const [form, onChangeInputs] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  //--- Estados com valores booleanos para a validação do dados preenchidos no form
  const [isStreetValid, setIsStreetValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true);
  const [isCityValid, setIsCityValid] = useState(true);
  const [isStateValid, setIsStateValid] = useState(true);
  const [isComplementValid, setIsComplementValid] = useState(true);

  const onSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    axios
      .put(`${BASE_URL}/${appName}/address`, form, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        Coordinator.goToProfile(navigate);
        localStorage.setItem("token", response.data.token);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };
  return (
    <AddressRegistrationContainer>
      <Header>
        <button
          className="go-back-button"
          onClick={() => Coordinator.goBack(navigate)}
        >
          <FiChevronLeft />
        </button>
        <h2>
          <strong>Endereço</strong>
        </h2>
      </Header>
      <Divider marginBottom="30px" />
      <Form>
        <form onSubmit={onSubmit}>
          <StreetInput
            value={form.street}
            onChange={onChangeInputs}
            isValid={isStreetValid}
          ></StreetInput>
          <NumberInput
            value={form.number}
            onChange={onChangeInputs}
            isValid={isNumberValid}
          />
          <ComplementInput
            value={form.complement}
            onChange={onChangeInputs}
            isValid={isComplementValid}
          />
          <NeighbourhoodInput
            value={form.neighbourhood}
            onChange={onChangeInputs}
            isValid={isNeighbourhoodValid}
          />
          <CityInput
            value={form.city}
            onChange={onChangeInputs}
            isValid={isCityValid}
          />
          <StateInput
            value={form.state}
            onChange={onChangeInputs}
            isValid={isStateValid}
          />

          <Button
            marginTop="0.5rem"
            borderRadius="2px"
            height="2.625rem"
            type="submit"
            colorScheme="red"
            variant="solid"
            color="black"
          >
            Salvar
          </Button>
        </form>
      </Form>
    </AddressRegistrationContainer>
  );
};
