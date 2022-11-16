import React, { useState, useEffect} from 'react';
import User from './User';
import UserForm from './UserForm';
import axios from 'axios';
import schema from './formSchema';
import * as yup from 'yup';

//initial states

const initialFormValues = {
  ///// TEXT INPUTS /////
  first_name: '',
  last_name: '',
  email: '',
  password: '',

  ///// CHECKBOXES /////
  terms: false
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false
}
const initialUsers = []
const initialDisabled = true

export default function App(){
  //states
  const [users, setUsers] = useState(initialUsers)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)   // boolean

  
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users]);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
}
//event handler

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value 
  })
}

const formSubmit = () => {
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: formValues.terms
  }
  console.log(newUser);
  postNewUser(newUser);
}
//side effects

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className="App">
      <header className="App-header"><h1>Let's get onBoard, new user!</h1></header>
      
      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
        {users.map((user, idx ) => (
          <User key={idx} details={user}/>
        ))}
     
            </div>

  );
}




//endpoint is https://reqres.in/api/users