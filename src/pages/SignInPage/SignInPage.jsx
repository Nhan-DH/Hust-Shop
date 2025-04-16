import React from 'react'
import { WrapperContainer, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignInPage = () => {
  const Navigate = useNavigate()
  const handleNavigateSignUp = () => {
    Navigate('/sign-up')
  }
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnchangeEmail = (value) =>{
    setEmail(value)
  }

  const handleOnchangePassword = (value) =>{
    setPassword(value)
  }
  const handleSignIn = () => {
    console.log('Email, password: ', email, password)
  }
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
      <div style={{ width: '360px', height: '350px', borderRadius: '6px', background: '#fff'}}>
        <WrapperContainer>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail}/>
          <div style={{ position: 'relative'}}>
          <InputForm placeholder="password" type={isShowPassword ? 'text' : 'password'} value={password} onChange={handleOnchangePassword}/>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
             style={{zIndex: 10, positon: 'absolute', top: '4px', right: '8px', marginLeft: '5px',cursor: 'pointer'}}>
              {isShowPassword ? (
                <EyeFilled/>
              ):(
                <EyeInvisibleFilled/>
              )
              }
            </span>
          </div>
          <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={40} 
              styleButton={{ background: 'rgb(255, 57, 69)', width: '300px', height: '45px', border: 'none', borderRadius: '4px'}} 
              textButton={'Đăng nhập'}
              styleTextButton = {{ color: '#fff', fontSize: '15px', fontWeight: '7000'}}
          >
          </ButtonComponent>
          <div style={{marginTop: '10px'}}><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></div>
          <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}>Đăng kí</WrapperTextLight></p>
        </WrapperContainer>

      </div>
    </div>
  )
}

export default SignInPage