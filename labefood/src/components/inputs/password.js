import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const PasswordInput = ({
  isValid,
  placeholder,
  label,
  value,
  onChange,
  showPassword,
  handleClick,
  errorMessage,
}) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>{label}</FormLabel>
      <InputGroup size="lg">
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          size="lg"
        />
        <InputRightElement height="100%" width="4.5rem">
          <Button background="none" h="1.75rem" size="lg" onClick={handleClick}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!isValid ? (
        <FormErrorMessage as="p">{errorMessage}</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
