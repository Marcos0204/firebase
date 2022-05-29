import React, {useState} from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth }  from '../../Firebase'


import { Container, Form } from './LoginStyled'
const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState(Number)
  const [ user, setUser ] = useState({})
  const haledSubmit = (e) =>{
    e.preventDefault();
    console.log(password)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  return (
    <Container>
        <h1>login</h1>
        <Form
          onSubmit={haledSubmit}
        >
          <input 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            />
          <input 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
           />
           <button 
            type='submit'
            onClick={() => console.log('entrar')}
            >
             Entrar
           </button>
        </Form>
    </Container>
  )
}

export default Login
