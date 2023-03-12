import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export const NeighbourhoodInput = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel> Bairro* </FormLabel>
      <Input
        name="neighbourhood"
        value={value}
        onChange={onChange}
        placeholder="Bairro"
        required
      />
      {!isValid ? (
        <FormErrorMessage as="p">Campo obrigatório</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};