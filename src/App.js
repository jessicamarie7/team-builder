import React, { useState } from 'react';
import NewForm from './components/NewForm';
import axios from 'axios';
import NewPerson from './components/NewPerson';


const originalTeam = [
  { coworker: 'Katherine', department: 'Finance' },
  { coworker: 'Jason', department: 'Technology' },
]

const initialFormValues = { coworker: "", department: "",}

export default function App() {
  const [coworkers, setCoworkers] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newEmployee = {
      coworker: formValues.coworker.trim(),
      department: formValues.department.trim()
    }
    if (!newEmployee.coworker || !newEmployee.department) {
      setErrorText("Please fill out every field to continue")
    }
    setCoworkers(coworkers.concat(NewPerson))
    setFormValues(initialFormValues)
    return;
  }
  

  return (
    <div className="App">
      <h2>Welcome to the team!</h2>
      <NewForm 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      errorText={errorText}
      />
    </div>
  );
}

