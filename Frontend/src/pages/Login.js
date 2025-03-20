import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../features/apiCall";
import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
height: 100vh;
width: 40vw

`

const Wrapper = styled.div`
width: 30vw;
padding:40px;
margin: auto; 
  background-color: white;
  ${mobile({ width:"70%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 10px auto;
  &:disabled{
    cursor: not-allowed;
  }
`;
const Error = styled.span`
  color: red;
`;
const Logo = styled.h1`
  font-weight: bold;
  padding:0 0 80px 0;
  ${mobile({ fontSize: "24px" })}
`;


const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUserName] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error}  = useSelector((state)=>state.user)
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch,({username,password}));

  }

  return (
    <Container>
      <Wrapper>
      <Logo>StuffWadrobe.</Logo>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={(e)=>setUserName(e.target.value)}/>
          <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
          <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Somthing went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
      <Image src="https://images.unsplash.com/photo-1485518882345-15568b007407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80" alt="Img"/>
    </Container>
  );
};

export default Login;