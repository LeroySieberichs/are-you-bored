import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {
  Switch,
  Route
} from "react-router-dom";
import 'animate.css';
import Home from "pages/home";
export const App = () => (
  <ChakraProvider theme={theme}>
        <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </ChakraProvider>
)
