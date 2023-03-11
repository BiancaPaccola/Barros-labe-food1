import { theme } from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/router";
import StateGlobal from "./context/StateGlobal";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <StateGlobal>
        <Router />
      </StateGlobal>
    </ChakraProvider>
  );
}
export default App;
