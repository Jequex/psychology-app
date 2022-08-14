import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import Error from "../pages/Error"

// eslint-disable-next-line no-undef
test("renders error page", () => {
  render(<Router><Error /></Router>)
  const element = screen.getByText(/error/i)
  // eslint-disable-next-line no-undef
  expect(element).toBeInTheDocument()
})

// eslint-disable-next-line no-undef
afterEach(cleanup)
