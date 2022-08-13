import React, { useState, useContext, useEffect } from "react"
import QuestionsContext from "../contexts/questions/questionsContext"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import "../css/form.css"

const FormComponent = ({ oneQuestion }) => {
  const questionsContext = useContext(QuestionsContext)
  const { nextClicked, currentQuestion } = questionsContext
  const [form, setForm] = useState("")
  const navigate = useNavigate()

  const buttonClicked = () => {
    nextClicked(form)
    if (currentQuestion >= 4) {
      navigate("/success")
    }
  }

  useEffect(() => { setForm("") }, [currentQuestion])

  const setFormData = (e) => {
    setForm(e.target.value)
  }

  return (
    <div className="form-page">
      <div className="home-button">
        <Button onClick={() => navigate("/")}>Back Home</Button>
      </div>
      <div className="form-div">
        <Form>
          <Form.Group>
            <Form.Label htmlFor="default-radio">{oneQuestion?.number}.{" "}{oneQuestion?.question}</Form.Label>
            {oneQuestion?.answers.map(
              (answer) =>
                <Form.Check type="radio" key={answer.number}
                  id="default-radio" label={answer.answer} value={answer.value} name="answer" onChange={setFormData} />)}
          </Form.Group>
        </Form>
      </div>
      <div className="submit-button">
        <Button onClick={buttonClicked} disabled={form === ""}>{currentQuestion < 4 ? "Next" : "Submit"}</Button>
      </div>
    </div>
  )
}

FormComponent.propTypes = {
  oneQuestion: PropTypes.object
}

export default FormComponent
