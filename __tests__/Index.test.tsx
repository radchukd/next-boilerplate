import React from "react";
import { render } from "@testing-library/react";

describe("App", () => {
  it("renders a heading", () => {
    const { getByRole } = render(<h1>Hello World</h1>);

    const heading = getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Hello World");
  });
});
