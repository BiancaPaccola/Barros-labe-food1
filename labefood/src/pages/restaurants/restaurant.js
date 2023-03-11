import axios from "axios";
import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { appName, BASE_URL } from "../../constants";
import { useProtectPage } from "../../hooks/useProtectPage";
import { Title, Detail, MainConteiner, Info, Cards } from "./styledRest";
import { FiChevronLeft } from "react-icons/fi";
import { goBack } from "../../routes/coordinator";
import { CardCart } from "../../components/card";
import { CartContext } from "../../context/Context";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  useNumberInput,
  Input,
  HStack,
} from "@chakra-ui/react";
import { CardContainer } from "../../components/card/style";

export const RestaurantsPage = () => {
  const { states, setStates, restInfo, setRestInfo } = useContext(CartContext);

  useProtectPage();
  const navigate = useNavigate();
  const parametro = useParams();
  const token = localStorage.getItem("token");

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 1,
      max: 10,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const onClickProduct = (produto) => {
    produto.quantity = 0;
  };
  const handleClick = (produto) => {
    produto.quantity = input.value;
  };

  const detailRestaurant = () => {
    axios
      .get(`${BASE_URL}/${appName}/restaurants/${parametro.restauranteId}`, {
        headers: { auth: token },
      })
      .then((response) => {
        const request = response.data.restaurant;

        const produtos =
          request &&
          request.products.map((item) => {
            return {
              id: item.id,
              photoUrl: item.photoUrl,
              name: item.name,
              description: item.description,
              price: item.price,
              quantity: 0,
            };
          });

        const restaurante = request;
        delete restaurante.products;

        setRestInfo(restaurante);
        setStates(produtos);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    detailRestaurant();
  }, []);

  useEffect(() => {
    if (states.length > 0) {
      setStates([...states]);
    }
  }, [handleClick]);

  return (
    <>
      <MainConteiner>
        <div>
          <button className="go-back-button" onClick={() => goBack(navigate)}>
            <FiChevronLeft />
          </button>
          <div className="title">
            <Title>Restaurante</Title>
          </div>
        </div>

        <Detail>
          <img src={restInfo.logoUrl} alt="Logo restaurante" />
          <p className="name-restaurant">{restInfo.name}</p>
        </Detail>
      </MainConteiner>
      <Info>
        <p>{restInfo.category}</p>
        <div className="shipping-price">
          <h6>{restInfo.deliveryTime} min</h6>
          <p> Frete R$:{restInfo.shipping},00</p>
        </div>
        <p>{restInfo.address}</p>
      </Info>
      <Cards>
        {states &&
          states.map((i) => {
            return (
              <>
                {i.photoUrl && (
                  <CardContainer key={i.id}>
                    <CardCart
                      image={i && i.photoUrl && i.photoUrl}
                      title={i.name}
                      description={i.description}
                      price={i.price.toFixed(2)}
                    ></CardCart>
                    <div className="buttons">
                      {i.quantity === 0 || i.quantity === undefined ? (
                        <div></div>
                      ) : (
                        <span>{i.quantity}</span>
                      )}
                      {i.quantity > 0 ? (
                        <Button
                          onClick={() => onClickProduct(i)}
                          className="remove-button"
                        >
                          <p>Remover</p>
                        </Button>
                      ) : (
                        <Popover>
                          <PopoverTrigger>
                            <Button className="add-button">
                              <p>Adicionar</p>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton border="none" />
                            <PopoverHeader>
                              Selecione a quantidade desejada!
                            </PopoverHeader>
                            <PopoverBody>
                              <form>
                                <HStack maxW="320px">
                                  <Button {...inc}>+</Button>
                                  <Input {...input} />
                                  <Button {...dec}>-</Button>
                                </HStack>
                                <Button
                                  onClick={() => handleClick(i)}
                                  colorScheme="blue"
                                  variant="ghost"
                                >
                                  Adicionar ao carrinho
                                </Button>
                              </form>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  </CardContainer>
                )}
              </>
            );
          })}
      </Cards>
    </>
  );
};
