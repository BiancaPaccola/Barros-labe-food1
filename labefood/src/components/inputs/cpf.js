import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export const CpfInput = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>CPF*</FormLabel>
      <Input
        type="number"
        name="cpf"
        placeholder="000.000.000-00"
        value={value}
        onChange={onChange}
        size="lg"
        required
      />
      {!isValid ? (
        <FormErrorMessage as="p">Número de CPF inválido.</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
