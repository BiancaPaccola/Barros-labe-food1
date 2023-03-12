import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProtectPage } from "../../hooks/useProtectPage";
import { BASE_URL, appName } from "../../constants/index";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { TabListFeed } from "../../components/tabList";
import {
  Span,
  ConteinerInput,
  Card,
  Restaurant,
  Detail,
  Main,
  Erro,
  Spin,
} from "./styledFeed";
import search from "../../img/imgFooter/search_2022-09-22/search@2x.png";
import { Banner } from "../../components/banner";

export const FeedPage = () => {
  useProtectPage();
  
  const [restaurants, setRestaurants] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [activeOrder, setActiveOrder] = useState(undefined);
  const [tabIndex, setTabIndex] = useState(0);

  const navigate = useNavigate();

  const goToRestaurants = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const token = localStorage.getItem("token");

  const getActiveOrder = () => {
    axios
      .get(`${BASE_URL}/${appName}/active-order`, {
        headers: { auth: token },
      })
      .then((response) => {
        setActiveOrder(response.data.order);
      });
  };

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/${appName}/restaurants`, {
        headers: { auth: token },
      })
      .then((response) => {
        setIsLoading(!isLoading);
        setRestaurants(response.data.restaurants);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getRestaurants();
    getActiveOrder();
  }, []);

  //INPUT FILTRO
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const nomesRestaurantes = [
    "Todos",
    "Árabe",
    "Asiática",
    "Baiana",
    "Carnes",
    "Hamburguer",
    "Italiana",
    "Mexicana",
    "Petiscos",
    "Sorvetes",
  ];

  const restaurantesFeed =
    restaurants &&
    restaurants
      .filter((rest) => {
        return input
          ? rest.name.toLowerCase().includes(input.toLowerCase())
          : tabIndex === 0
          ? rest.category !== 'Todos'
          : rest.category === nomesRestaurantes[tabIndex]
      })
      .map((rest) => {
        return (
          <Card onClick={() => goToRestaurants(rest.id)}>
            <img src={rest.logoUrl} alt="Restaurante" />
            <Restaurant>{rest.name}</Restaurant>
            <Detail>
              <p>{rest.deliveryTime} min</p>
              <h6>Frete R$:{rest.shipping},00</h6>
            </Detail>
          </Card>
        );
      });

  return (
    <Main>
      <Span>
        <div>Ifuture</div>
      </Span>

      <ConteinerInput>
        <input
          value={input}
          onChange={onChangeInput}
          placeholder="Busca"
          type="text"
        ></input>
        <span>
          <img src={search} alt="busca" />
        </span>
      </ConteinerInput>

      <TabListFeed
        setTabIndex={setTabIndex}
        restaurantesFeed = {restaurantesFeed}
      />
      
      {!isLoading && restaurantesFeed.length === 0 && (
        <Erro>Não encontramos :( </Erro>
      )}
      {isLoading && <Spin />}
      {!activeOrder && ""}
      {activeOrder && (
        <Banner
          name={activeOrder.restaurantName}
          price={activeOrder.totalPrice.toFixed(2)}
        />
      )}
      <Footer />
    </Main>
  );
};