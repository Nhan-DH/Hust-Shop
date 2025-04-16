import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import InputComponent from '../InputComponent/InputComponent'; 
import {
  SearchOutlined
} from '@ant-design/icons'
const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton, variant,
    backgroundColorInput = '#fff',backgroundColorButton='rgb(13, 92, 182)',
    colorButton ='#fff' } = props
  return (
    <div style={{ display: 'flex'}}>
      <InputComponent 
        size={size} 
        placeholder={placeholder} 
        variant={variant} 
        style={{ backgroundColor: backgroundColorInput, borderRadius: '1px'}}
      />
      <ButtonComponent
        size={size} 
        styleButton={{ background: backgroundColorButton, border: !variant && 'none', borderRadius: '2px' }} 
        icon={<SearchOutlined style={{ color: '#fff'}} />}
        textButton={textButton}
        styleTextButton = {{ color: colorButton }}
      ></ButtonComponent>
    </div>
  )
}

export default ButtonInputSearch