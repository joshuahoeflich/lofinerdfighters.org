import React from "react";
import { render } from "@testing-library/react";

describe("Testing with Jest", () => {
  test("works", () => {
    const { getByText } = render(<h1>Hello</h1>);
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
