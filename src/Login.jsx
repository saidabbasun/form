import React from 'react';
import User from "./icon/user.png";
import {Span, Button, CheckBox, Description, Info, Input, InputWrapper,  Title,  Wrapper, Forget, UserInput } from './style.js';

 function Login() {
    return (
      <Wrapper>
        <Description>Already have an account</Description>
        <Title>Login in Here</Title>
        <InputWrapper>
        <UserInput src={User}/>
          <Input placeholder="Username" />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Password" />
        </InputWrapper>
        <Info>
          <Span>
            <CheckBox type="checkbox" />
            Keeep me logged in
          </Span>

          <Button select>Log In</Button>
        </Info>
        <Forget>Forget password?</Forget>
      </Wrapper>
    );
}
export default Login;