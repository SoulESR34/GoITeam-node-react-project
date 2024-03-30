import React from 'react'
import { HomeBackground } from '../../common/HomeBackground.styled'
import { LoginForm } from '../../../components/forms/LoginForm/LoginForm'

export const Login = () => {
  return (
    <HomeBackground>
      <div className='container'>
        <LoginForm />
      </div>
    </HomeBackground>
  )
}
