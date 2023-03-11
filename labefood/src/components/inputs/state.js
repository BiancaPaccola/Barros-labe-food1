import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export const StateInput = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel> Estado* </FormLabel>
      <Input
        name="state"
        value={value}
        onChange={onChange}
        placeholder="Estado"
        required
      />
      {!isValid ? (
        <FormErrorMessage as="p">Campo obrigatório</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
