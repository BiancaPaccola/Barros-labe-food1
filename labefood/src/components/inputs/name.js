import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export const NameInput = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Nome*</FormLabel>
      <Input
        type="text"
        name="name"
        placeholder="Nome e sobrenome"
        value={value}
        onChange={onChange}
        size="lg"
        required
      />
      {!isValid ? (
        <FormErrorMessage as="p">Atenção: Nome e sobrenome</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
