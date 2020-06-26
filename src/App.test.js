import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { act } from "react-test-renderer";

it("renders without crashing", async () => {
  await act(() => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
