import React from 'react'
import { Input } from 'antd';
const InputForm = ( props ) => {
  const { placeholder = 'Nhập text', ...rests } = props
  const handleOnchangeInput = (e) =>{
    props.onChange(e.target.value)
  }
  return (
    <Input placeholder={placeholder} value={props.value} {...rests} style={{width:'300px', marginBottom:'10px'}} onChange={handleOnchangeInput}/>
  )
}

export default InputForm