import React from "react"
import { Button as MuiButton } from "@mui/material"

interface ButtonProp {
  name: string,
  onClick?: () => void;
}

const Button: React.FC<ButtonProp> = ({ name, ...rest }) => {
  return <MuiButton {...rest}>{name}</MuiButton>
}

export default Button