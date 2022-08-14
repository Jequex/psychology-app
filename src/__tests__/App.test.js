import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import App from "../App"

// eslint-disable-next-line no-undef
test("renders Home Page", () => {
  render(<App />)
  const element = screen.getByText(/welcome/i)
  // eslint-disable-next-line no-undef
  expect(element).toBeInTheDocument()
})

// eslint-disable-next-line no-undef
afterEach(cleanup)
