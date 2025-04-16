import React from 'react'
import { WrapperContainer, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUpPage = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () =>{
    navigate('/sign-in')
  }
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleOnchangeEmail = (value) =>{
    setEmail(value)
  }

  const handleOnchangePassword = (value) =>{
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) =>{
    setConfirmPassword(value)
  }

  const handleSignUp = () =>{
    console.log('email, password, confirmPassword: ',email, password, confirmPassword)
  }
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
      <div style={{ width: '360px', height: '350px', borderRadius: '6px', background: '#fff'}}>
        <WrapperContainer>
          <h1>Xin chào</h1>
          <p>Đăng ký tài khoản</p>
          <InputForm placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail}/>
          <div style={{ position: 'relative'}}>
          <InputForm placeholder="password" type={isShowPassword ? 'text' : 'password'} value={password} onChange={handleOnchangePassword}/>
            <span 
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{zIndex: 10, positon: 'absolute', top: '5px', right: '8px', marginLeft: '5px', cursor: 'pointer'}}>
              {isShowPassword ? (
                <EyeFilled/>
              ):(
                <EyeInvisibleFilled/>
              )
              }
            </span>
          </div>
          <div style={{ position: 'relative'}}>
          <InputForm placeholder="comfirm password" type={isShowPassword ? 'text' : 'password'} value={confirmPassword} onChange={handleOnchangeConfirmPassword}/>
          </div>
          <ButtonComponent
              disabled={!email.length || !password.length || !confirmPassword.length}
              onClick={handleSignUp}
              size={40} 
              styleButton={{ background: 'rgb(255, 57, 69)', width: '300px', height: '45px', border: 'none', borderRadius: '4px'}} 
              textButton={'Đăng ký'}
              styleTextButton = {{ color: '#fff', fontSize: '15px', fontWeight: '7000'}}
          >
          </ButtonComponent>
          <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateLogin}>Đăng nhập</WrapperTextLight></p>
        </WrapperContainer>

      </div>
    </div>
  )
}

export default SignUpPage