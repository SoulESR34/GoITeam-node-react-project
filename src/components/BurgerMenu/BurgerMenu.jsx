import React from 'react'
import { modalContainer } from './BurgerMenu.styled'

export const BurgerMenu = ({childen}) => {
  return (
    <modalContainer>
        {...childen}
    </modalContainer>
  )
}
