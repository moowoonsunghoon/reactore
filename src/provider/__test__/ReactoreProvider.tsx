import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactoreProvider } from "../ReactoreProvider";
import { ReactoreClient } from "../../core";

describe("DepoProvider", () => {
  const reactore = new ReactoreClient({});

  it("should render", () => {
    render(
      <ReactoreProvider reactore={reactore}>
        <div>Test</div>
      </ReactoreProvider>
    );

    expect(screen.getByText("Test")).toBeTruthy();
  });
});
