import React from "react";
import { render } from "@testing-library/react";
import Home from ".";
import { BrowserRouter } from "react-router-dom";

const Wrapper: React.FunctionComponent = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

test("renders GitHub link", () => {
  const { getByText } = render(<Home />, {
    wrapper: Wrapper
  });
  const linkElement = getByText(/GitHub/i);
  expect(linkElement).toBeInTheDocument();
});
