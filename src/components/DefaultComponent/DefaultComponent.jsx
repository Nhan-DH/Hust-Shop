import React from 'react'
//Chọn những components muốn hiển thị cùng header
import HeaderComponent from '../HeaderComponent/HeaderComponent'
const DefaultComponent = ({children}) => {
  return (
    <div>
      <HeaderComponent/>
      {children}
    </div>
  )
}

export default DefaultComponent