import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a393e;
  width: 100%;
  height: 100vh;
  color:white;

`

export const Wrapper=styled.div`
width:360px;
height:fit-content;
border:2px solid #445859;
margin:10px;
border-radius:5px;
display:flex;
// justify-content:center;
align-items:center;
flex-direction:column;
padding:30px;
box-sizing:border-box
`

export const Description=styled.div`
color:white;
font-weight:600;
font-size:22px;
margin-top:20px;
`

export const Title=styled.div`
color:#E7C961;
font-size:28px;
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const Input = styled.input`

  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: rgba(104, 105, 102, 0.1);
  border: 1px solid #354545;
  margin-top: 20px;
  outline: none;
  color: white;
  font-size: 22px;
  padding-left: 20px;
  
`
export const UserInput = styled.img`
  width: 20px;
 
  margin-top:30px;
  position:absolute;
`;

export const Button=styled.button`
width:123px;
height:45px;
background-color:#00988D;
color: white;
font-size:22px;
margin-top:${(props)=>props.select?'0': '20px'};
margin-left:auto;
border:0;
outline:none;
border-radius:4px;
`
export const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top:20px;
`;

export const CheckBox = styled.input`
margin-right:10px;
  width: 50px;
  height: 50px;
  background-color: rgba(104, 105, 102, 0.1);
  border: 1px solid #354545;
  border-radius:5px;
`;
export const Span=styled.span`
display:flex;
width:120px;
justify-content:center;
align-items:center;
`
export const Forget=styled.div`
margin-left:auto;
margin-top:30px;
font-size:18px;
font-weight:400;
color:white;
`