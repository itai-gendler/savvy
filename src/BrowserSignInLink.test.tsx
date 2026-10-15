import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import BrowserSignInLink from "./BrowserSignInLink";

it("provides a selectable, read-only link and removes it when the flow ends", () => {
  const url =
    "https://auth.example.test/authorize?state=one&code_challenge=two";
  const { rerender } = render(<BrowserSignInLink url={url} />);
  fireEvent.click(screen.getByText("Browser didn’t open?"));
  const input = screen.getByLabelText("Sign-in link") as HTMLInputElement;
  expect(input).toHaveValue(url);
  expect(input.readOnly).toBe(true);
  fireEvent.focus(input);
  expect(input.selectionStart).toBe(0);
  expect(input.selectionEnd).toBe(url.length);
  rerender(<BrowserSignInLink url="" />);
  expect(screen.queryByLabelText("Sign-in link")).not.toBeInTheDocument();
});
