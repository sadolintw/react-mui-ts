import React from "react"
import {Button as MuiButton} from "@mui/material"

interface ButtonProp{
  name: string
}

const Button: React.FC<ButtonProp> = ({name}) => {
  return <MuiButton>{name}</MuiButton>
}

export default Button