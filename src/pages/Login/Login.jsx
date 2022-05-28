import React, {useState} from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux'


import { auth }  from '../../Firebase' 
import { AuthAction } from '../../store/actions/authAction'


import { Container, Form } from './LoginStyled'
const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState(Number)
  const [ user, setUser ] = useState({})
  const [ error, setError ] = useState({})

  const dispatch = useDispatch();


  //// funcion para iniciar sesion 
  const haledSubmit = (e) =>{
    e.preventDefault();
  
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser(user)
      dispatch(AuthAction(user))
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //setError(errorMessage);
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
            onClick={() => console.log('')}
            >
             Entrar
           </button>
        </Form>
    </Container>
  )
}

export default Login
