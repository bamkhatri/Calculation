// src/App.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });
  // This test check initial result is zero
  test("renders the component with initial state", () => {
    expect(screen.getByText(/Result:/)).toHaveTextContent("Result: 0");
  });

  //This add number correctly and test should pass
  test("adds numbers correctly", () => {
    fireEvent.change(screen.getByPlaceholderText("Enter first number"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter second number"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText(/Result:/)).toHaveTextContent("Result: 15");
  });

  // This subtracts number correctly and test should pass
  test("subtracts numbers correctly", () => {
    fireEvent.change(screen.getByPlaceholderText("Enter first number"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter second number"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Subtract"));
    expect(screen.getByText(/Result:/)).toHaveTextContent("Result: 5");
  });

  // This multiple numbers correctly and should pass
  test("multiplies numbers correctly", () => {
    fireEvent.change(screen.getByPlaceholderText("Enter first number"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter second number"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Multiply"));
    expect(screen.getByText(/Result:/)).toHaveTextContent("Result: 50");
  });

  // This test shoud pass now
  test("divides numbers incorrectly (intentionally failing)", () => {
    fireEvent.change(screen.getByPlaceholderText("Enter first number"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter second number"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Divide"));
    expect(screen.getByText(/Result:/)).toHaveTextContent("Result: 2");
  });
});
