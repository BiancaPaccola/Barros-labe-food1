import { CartContainer } from "./style";
import { Button } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { CardCart } from "../../components/card";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { CardContainer } from "../../components/card/style";
import { appName, BASE_URL } from "../../constants/index";
import axios from "axios";
import { Footer } from "../../components/footer/Footer";
import { useProtectPage } from "../../hooks/useProtectPage";
import { RadioGroupCart } from "../../components/radioGroupCart/radioGroupCart";

export const CartPage = () => {
  const token = localStorage.getItem("token");
  const [cart, setCart] = useState(false);
  const { states, setStates, restInfo } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState();
  const [address, setAddress] = useState({});
  const [paymentMethodRadio, setPaymentMethodRadio] = useState(undefined);
  const [cartProducts, setCartProducts] = useState(
    states &&
      states.filter((item) => {
        return item.quantity > 0;
      })
  );

  useProtectPage();

  useEffect(() => {
    getAddress();
  }, [address, setAddress, token]);

  let products =
    cartProducts &&
    cartProducts.map((item) => {
      return { id: item.id, quantity: item.quantity };
    });

  const body = {
    products: products,
    paymentMethod: paymentMethodRadio,
  };

  const getAddress = async () => {
    await axios
      .get(`${BASE_URL}/${appName}/profile/address`, {
        headers: { auth: token },
      })
      .then((response) => {
        response.data.address && setAddress(response.data.address);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const placeOrder = () => {
    axios
      .post(`${BASE_URL}/${appName}/restaurants/${restInfo.id}/order`, body, {
        headers: { auth: token },
      })
      .then((response) => {
        alert("Pedido realizado com sucesso!");
        setStates([])

      })
      .catch((err) => {
        alert("Já possui pedido em andamento, POR FAVOR AGUARDE!");
      });
  };

  const onClickProduct = useCallback((produto) => {
    produto.quantity = 0;
    cartProducts.splice(cartProducts.indexOf(produto), 1);
    setCart(!cart);
  });

  useEffect(() => {
    if (cartProducts.length > 0) {
      setCartProducts([...cartProducts]);
    }
  }, [cart]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      let newPrice = 0;
      cartProducts.forEach((product) => {
        newPrice += product.price * product.quantity;
      });

      setTotalPrice(newPrice);
    }
  }, [cartProducts]);

  if (cartProducts.length === 0) {
    return (
      <CartContainer>
        <header>
          <h1>Meu carrinho</h1>
        </header>

        <div className="address">
          <p>Endereço de entrega</p>
          <p>
            {!address && "Endereço não encontrado :/"}
            {address.complement
              ? `${address.street !== undefined ? address.street : ""}, ${
                  address.number !== undefined ? address.number : ""
                }, ${
                  address.complement !== undefined ? address.complement : ""
                } ${
                  address.neighbourhood !== undefined
                    ? " - " + address.neighbourhood
                    : ""
                }`
              : `${address.street !== undefined ? address.street : ""} ${
                  address.number !== undefined ? ", " + address.number : ""
                } ${
                  address.neighbourhood !== undefined
                    ? " - " + address.neighbourhood
                    : ""
                }`}
          </p>
        </div>
        <div className="title">
          <h2>Carrinho vazio</h2>
        </div>
        <div className="price-container">
          <div className="subtotal">
            <p>SUBTOTAL</p>
          </div>
          <div className="price">
            <h6>Frete R$0,00</h6>
            <p>R$00,00</p>
          </div>
        </div>
        <div className="payment-title">
          <p>Forma de pagamento</p>
        </div>
        <span className="line"></span>

        <RadioGroupCart setPaymentMethodRadio={setPaymentMethodRadio} />

        <div className="submit-button">
          <Button
            type="submit"
            colorScheme="red"
            variant="solid"
            borderRadius="2px"
            height="2.625rem"
            opacity="0.80"
          >
            Confirmar
          </Button>
        </div>
        <Footer />
      </CartContainer>
    );
  } else {
    return (
      <CartContainer>
        <header>
          <h1>Meu carrinho</h1>
        </header>
        <div className="address">
          <p>Endereço de entrega</p>
          <p>
            {!address && "Endereço não encontrado :/"}
            {address.complement
              ? `${address.street !== undefined ? address.street : ""}, ${
                  address.number !== undefined ? address.number : ""
                }, ${
                  address.complement !== undefined ? address.complement : ""
                } ${
                  address.neighbourhood !== undefined
                    ? " - " + address.neighbourhood
                    : ""
                }`
              : `${address.street !== undefined ? address.street : ""} ${
                  address.number !== undefined ? ", " + address.number : ""
                } ${
                  address.neighbourhood !== undefined
                    ? " - " + address.neighbourhood
                    : ""
                }`}
          </p>
        </div>
        <div className="rest-info">
          <h2>{restInfo.name}</h2>
          <p>{restInfo.address}</p>
          <p>{restInfo.deliveryTime} min</p>
        </div>

        <CardCart />
        {cartProducts &&
          cartProducts
            .filter((item) => {
              return item.quantity > 0;
            })
            .map((i) => {
              return (
                <>
                  <CardContainer key={i.id}>
                    <CardCart
                      image={i && i.photoUrl && i.photoUrl}
                      title={i.name}
                      description={i.description}
                      price={i.price.toFixed(2)}
                    />
                    <div className="buttons">
                      {i.quantity === 0 || i.quantity === undefined ? (
                        <div></div>
                      ) : (
                        <span>{i.quantity}</span>
                      )}
                      <Button
                        onClick={() => onClickProduct(i)}
                        className="remove-button"
                      >
                        <p>Remover</p>
                      </Button>
                    </div>
                  </CardContainer>
                </>
              );
            })}

        <div className="price-container">
          <div className="subtotal">
            <p>SUBTOTAL</p>
          </div>
          <div className="price">
            <h6>{`Frete R$${restInfo && restInfo.shipping.toFixed(2)}`}</h6>
            <p>{`R$${totalPrice && totalPrice.toFixed(2)}`}</p>
          </div>
        </div>
        <div className="payment-title">
          <p>Forma de pagamento</p>
        </div>
        <span className="line"></span>

        <RadioGroupCart setPaymentMethodRadio={setPaymentMethodRadio} />

        <div className="submit-button">
          <Button
            type="submit"
            colorScheme="red"
            variant="solid"
            borderRadius="2px"
            height="2.625rem"
            onClick={placeOrder}
          >
            Confirmar
          </Button>
        </div>
        <Footer />
      </CartContainer>
    );
  }
};
