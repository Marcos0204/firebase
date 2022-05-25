import React from 'react'
import { Container, Form } from './LoginStyled'
const Login = () => {
  return (
    <Container>
        <h1>login</h1>
        <Form>
          <input 
            placeholder='Email'
            />
          <input 
            placeholder='Password'
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
