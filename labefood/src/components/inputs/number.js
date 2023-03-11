import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export const NumberInput = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel> Número* </FormLabel>
      <Input
        name="number"
        value={value}
        onChange={onChange}
        placeholder="Número"
        required
      />
      {!isValid ? (
        <FormErrorMessage as="p">Campo obrigatório</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
