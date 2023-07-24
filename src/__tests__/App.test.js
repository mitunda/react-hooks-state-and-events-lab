
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("changes to 'dark' mode when the button is clicked", () => {
  render(<App />);
  const button = screen.getByText(/Toggle Mode/);
  fireEvent.click(button);
  expect(screen.getByTestId("app-container")).toHaveClass("dark");
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  render(<App />);
  const button = screen.getByText(/Toggle Mode/);
  fireEvent.click(button);
  fireEvent.click(button);
  expect(screen.getByTestId("app-container")).toHaveClass("light");
});
