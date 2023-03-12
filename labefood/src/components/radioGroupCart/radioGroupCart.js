import { Stack, Radio, RadioGroup } from "@chakra-ui/react";

export const RadioGroupCart = ({setPaymentMethodRadio}) => {
  return (
    <RadioGroup width="85vw" defaultValue="money">
      <Stack direction="column">
        <Radio
          value="money"
          onChange={(e) => {
            setPaymentMethodRadio(e.target.value);
          }}
        >
          Dinheiro
        </Radio>
        <Radio
          value="creditcard"
          onChange={(e) => {
            setPaymentMethodRadio(e.target.value);
          }}
        >
          Cartão de crédito
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
