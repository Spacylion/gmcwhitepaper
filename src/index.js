import styles from "./index.css"
import { StrictMode } from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"

import { BrowserRouter } from "react-router-dom"
import App from "./App"

const rootElement = document.getElementById("root")

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={styles}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  rootElement
)
