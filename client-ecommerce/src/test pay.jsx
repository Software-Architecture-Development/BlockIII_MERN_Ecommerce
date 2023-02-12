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
  it("calls the correct endpoint with correct data when making a payment", async () => {
    const { getByText } = render(<Pay />);
    const button = getByText("Pay Now");
    fireEvent.click(button);

    const mockData = { tokenId: "12345", amount: 2000 };
    const mockResponse = { data: "Payment successful" };

    axios.post.mockResolvedValue(mockResponse);

    await new Promise((resolve) => setImmediate(resolve));
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5000/api/checkout/payment",
      mockData
    );
  });
});