import { render } from "@testing-library/react";
import Kitten from "./kitten";

test("renders an image", () => {
  const { getByTestId } = render(<Kitten />);

  expect(getByTestId("kitten")).toBeDefined();
});
