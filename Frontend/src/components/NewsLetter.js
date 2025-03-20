import { Send } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "50px" })}
`
const Desc = styled.div`
font-size:20px;
margin-bottom: 20px;
${mobile({ textAlign: "center", width:"80%" })}
`
const InputContainer = styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

`
const Input  = styled.input`
    border: none;
    flex:8;
    padding-left: 20px;
    
`
const Button = styled.button`
    flex:1;
    background-color: #C4A484;
    border:none;
    cursor:pointer;
`
const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Newsletter Sign-In to get new updates faster</Desc>
        <InputContainer>
            <Input placeholder='Your E-Mail'/>
                <Button>
                    <Send/>
                </Button>
            
        </InputContainer>
    </Container>
  )
}


export default NewsLetter;