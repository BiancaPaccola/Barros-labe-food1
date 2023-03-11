import { useNumberInput, Button, Input, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../context/Context";

export function HookUsage({ handleSubmit }) {
  const { quantities, setQuantities } = useContext(CartContext);
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

  const handleClick = () => {
    setQuantities(input.value);
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <HStack maxW="320px">
          <Button {...inc}>+</Button>
          <Input {...input} />
          <Button {...dec}>-</Button>
        </HStack>
        <Button onClick={handleClick} colorScheme="blue" variant="ghost">
          Adicionar ao carrinho
        </Button>
      </form>
    </>
  );
}
