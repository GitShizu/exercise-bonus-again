import { useState } from 'react'
import './App.css'
import CustomFormElement from './CustomFormElement'
import SmartComponent from './SmartComponent'

function App() {
  const [formData, setFormData] = useState([
    {
      id: "user-name",
      label: "User Name",
      value: "",
      mode: "input-text"
    },
    {
      id: "email",
      label: "User Name",
      value: "",
      mode: "input-email"
    },
    {
      id: "password",
      label: "User Name",
      value: "",
      mode: "input-password"
    }, {
      id: "gender",
      label: "Gender",
      value: "",
      mode: "input-radio",
      options: ['M', 'F']
    }, {
      id: "fav-color",
      label: "Favourite Color",
      value: "",
      mode: "select",
      options: ['Red', 'Green', 'Blue']
    }, {
      id: "privacy",
      label: "Privacy Policy",
      value: "",
      mode: "input-checkbox"
    },
  ])

  return (
    <section id='app-container'>
      <section className='form'>
        <h2>Standard</h2>
        {formData.map((dataObj, objIndex) => {
          const [inputValues, setInputValues] = useState(formData.map(() => ''))
          return (
            <CustomFormElement {...dataObj}
              inputValues = {inputValues}
              updateValues={(newValue) => {
                const newInputValues = [...inputValues]
                newInputValues[objIndex] = newValue
                setInputValues(newInputValues)
              }}
              objIndex = {objIndex}
              key={`${dataObj.id}_${objIndex}`}
            />
          )
        })}
      </section>

      {/* ----------------↓----↓----SMART COMPONENT----↓----↓---------------------- */}

      <section className='form'>
        <h2>"Smart"</h2>
        {formData.map((dataObj, objIndex) => {
          const [inputValues, setInputValues] = useState(formData.map(() => ''))
          return (
            <SmartComponent {...dataObj}
              inputValues = {inputValues}
              updateValues={(newValue) => {
                const newInputValues = [...inputValues]
                newInputValues[objIndex] = newValue
                setInputValues(newInputValues)
              }}
              objIndex = {objIndex}
              key={`${dataObj.id}_${objIndex}`}
            />
          )
        })}
      </section>
    </section>
  )
}

export default App
