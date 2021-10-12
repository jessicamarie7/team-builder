import React, { useState } from 'react';
import NewForm from './components/NewForm';


const originalTeam = [
  { coworker: 'Katherine', department: 'finance' },
  { coworker: 'Jason', department: 'technology' },
]

const initialFormValues = { coworker: "", department: "",}

export default function App() {
  const [coworkers, setCoworkers] = useState([]);

  const [formValues, setFormValues] = useState("");

  
  return (
    <div className="App">
      <h2>Hello World</h2>
      <NewForm />
    </div>
  );
}

