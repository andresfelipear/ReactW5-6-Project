import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles'

import CustomButton from 'components/custom-button/custom-button.component'

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    // handle with firebase
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    setUser(prevState => ({
        ...prevState,
        [name]: value
    }))
  }

  return(
      <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and password</span>

          <form onSumit={handleSubmit}>
              {/* email */}
              {/* password */}

              <ButtonsBarContainer>
                  <CustomButton type="submit">Sign In</CustomButton>
                  {/* <CustomButton type="button" onClick={signInWithGoogle}>Sign in with Google</CustomButton> */}
              </ButtonsBarContainer>
          </form>
      </SignInContainer>
  )
}


export default SignIn