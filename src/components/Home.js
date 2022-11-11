
import React from "react";
import styled from "styled-components";


const Title = styled.h1`

font-size: 4rem;
color:white ;
`

const Container = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
margin-top:50px;
`
const BoxLogin = styled.div`

background: firebrick;
width: 100%;
height: 50%;
max-width:450px;
height: 450px;
margin:0 auto;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius:5px;
margin-top:50px;


h2{
  color: white;
  margin-bottom:50px;
  text-align:start
}

form{
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  flex-direction: column;
}

input{
  width:60%;
  padding: 10px 0 15px 10px;
  outline: none;
  border-radius:5px;
  border: none;
  margin-top:10px;  
  
}

label{
  margin-top:5px;
  color:white;
}
`
const BoxBtn = styled.div`
width: 60%;
height:20%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
margin-top:10px;
text-align:center;

button{
  width: 100%;
  background:red;
  padding: 10px 0 15px 10px;
  font-weight: bold;
  color:white;  
  border-radius:5px;
  border: none;
  cursor: pointer;

}
p a{
 text-decoration: none;
 color:white
}

`
export default function Home() {
  return (
    <Container>
      <Title>welcome to my movie site </Title>
      <BoxLogin>
        <h2>Faça login</h2>
        <form>
        <label>Login</label>
        <input type="text"/>
        <label>Password</label>
        <input id="Password" type="password"/>
        <BoxBtn>
        <button>Entrar</button>
        <p><a href="#">Register</a></p>
        </BoxBtn>
        </form>
      </BoxLogin>
    </Container>
  );
}