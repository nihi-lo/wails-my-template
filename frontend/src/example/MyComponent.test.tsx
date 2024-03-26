import { render, screen } from "@testing-library/react";

import { MyComponent } from "./MyComponent";

test("「Hello Test」が描画されている", () => {
  render(<MyComponent title="Hello Test" />);
  screen.debug();
  expect(screen.getByText("Hello Test")).toBeInTheDocument();
});
