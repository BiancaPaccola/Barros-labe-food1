import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export const EmailInput = ({ value, onChange, isValid }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>E mail*</FormLabel>
      <Input
        type="email"
        name="email"
        placeholder="email@email.com"
        value={value}
        onChange={onChange}
        size="lg"
        required
      />
      {!isValid ? (
        <FormErrorMessage as="p">Email inválido.</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
