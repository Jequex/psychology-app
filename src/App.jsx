import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/app.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import QuestionsState from "./contexts/questions/QuestionsState"

import Layout from "./components/Layout"

import Home from "./pages/Home"
import Test from "./pages/Test"
import Success from "./pages/Success"
import Error from "./pages/Error"

function App () {
  return (
    <div className="app">
      <QuestionsState>
        <Layout>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="test" element={<Test/>} />
              <Route path="success" element={<Success/>} />
              <Route path="*" element={<Error/>} />
            </Routes>
          </Router>
        </Layout>
      </QuestionsState>
    </div>
  )
}

export default App
