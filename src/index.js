import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    useNextVariants: true
  }
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
