import React from 'react'
import { Input } from 'antd'
const InputComponent = ({ size, placeholder, variant, style, ...rests }) => {
  return (
    <Input 
      size={size} 
      placeholder={placeholder} 
      variant={variant} 
      style={style}
      {...rests}

    />
  )
}

export default InputComponent