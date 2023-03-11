import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export const CityInput = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel> Cidade* </FormLabel>
      <Input
        name="city"
        value={value}
        onChange={onChange}
        placeholder="Cidade"
        required
      />
      {!isValid ? (
        <FormErrorMessage as="p">Campo obrigatório</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
