import React from 'react'
import { Description, Title, Wrapper,InputWrapper,Input, Button } from "./style";

 function Register() {
    return (
      <Wrapper>
        <Description>Don't have an account?</Description>
        <Title>Register Now</Title>
        <InputWrapper>
          <Input placeholder="Username" />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Password" />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Password" />
        </InputWrapper>
        <Button>Log In</Button>
      </Wrapper>
    );
}
export default Register;