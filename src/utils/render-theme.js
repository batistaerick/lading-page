import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const renderTheme = (children) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export default renderTheme;
