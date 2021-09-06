import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  chakra,
  Flex,
  Stack,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import {
  Switch,
  Route
} from "react-router-dom";
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
