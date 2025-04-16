import React from 'react'
import { Badge, Col } from 'antd';
import { WrapperTextHeader, WrapperHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from "./style"
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () =>{
    navigate('/sign-in')
  }
  return (
    <div style={{width: '100%'}}>
      <WrapperHeader gutter={16}>
        <Col span={5}>
          <WrapperTextHeader>
            Web ban hang
          </WrapperTextHeader>
        </Col>
        <Col span={13}>
        <ButtonInputSearch
          size='large'
          textButton='Tìm kiếm'
          borded='false'
          placeholder="Input search text"
          />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center'}}>
          <WrapperHeaderAccount>
            <div>
              <UserOutlined style={{ fontSize: '30px'}}/>
            </div>
            <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
            <div>
              <Badge count={5} size={'small'}>
                <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff'}}/>
              </Badge>
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
        </Col>
        
    </WrapperHeader>
  </div>
  )
}

export default HeaderComponent