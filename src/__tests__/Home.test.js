import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "../pages/Home"

// eslint-disable-next-line no-undef
test("renders Home page", () => {
  render(<Router><Home /></Router>)
  const element = screen.getByText(/welcome/i)
  // eslint-disable-next-line no-undef
  expect(element).toBeInTheDocument()
})

// eslint-disable-next-line no-undef
afterEach(cleanup)
