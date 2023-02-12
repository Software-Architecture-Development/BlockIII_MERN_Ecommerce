import React from "react";
import { render, fireEvent } from "@testing-library/react";
import axios from "axios";
import Pay from "./Pay";

jest.mock("axios");

describe("Pay component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Pay />);
    const button = getByText("Pay Now");
    expect(button).toBeInTheDocument();
  });