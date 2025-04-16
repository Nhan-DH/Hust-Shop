import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd';

const NavbarComponent = () => {
  const onChange = () => {}
  const rederContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
            return (<WrapperTextValue>{option}</WrapperTextValue>) 
        })
      case 'checkbox':
        return(
          <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}onChange={onChange} >
                {options.map((option) => {
                  return(
                    <Checkbox value={option.value}>{option.lable}</Checkbox>
                  )
                })}
          </Checkbox.Group>
        )
      case 'star':
        return options.map((option) => {
                return(
                  <div style={{ display: 'flex' }}>
                    <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                    <span style={{ marginLeft: '4px' }}>{`tu ${option} sao`}</span>
                  </div>
                )
              })
      case 'price':
        return options.map((option) => {
                return(
                  <WrapperTextPrice>
                    {option}
                  </WrapperTextPrice>
                )
              })
      default:
        return {}
    }
  }
  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {rederContent('text', ['Tu lanh', 'TV', 'MAYGIAT'])}
      </WrapperContent>
     
    </div>
  )
}

export default NavbarComponent