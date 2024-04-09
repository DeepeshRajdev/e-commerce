import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { publicRequest } from "../requestMethods";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  let dispatch = useDispatch();
    let navigate = useNavigate();
    let [error, setError] = useState('');
  const [user, setUser] = useState({ username: "one", email: "one@one.com", password: "123", confirmPassword: ""});
  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const signup = async (e) => {

    e.preventDefault();
    if(user.password !== user.confirmPassword) {
        setError('Passwords do not match');
        return;
    }
    try {
        setError('');
        const session = await publicRequest.post('/auth/register', user);
        console.log(session);
        if (session) {
            const userData = await publicRequest.post('/auth/login', { username: user.username,email:user.email, password: user.password });
            if (userData) {
              login(dispatch, { username:user.username, password:user.password});
                navigate('/');
                console.log("User has been created successfully");
            }
        }
    }
    catch (err) {
        setError(err.message)
    }
}
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" name="name"/>
          <Input placeholder="last name" />
          <Input placeholder="username" onChange={change} name="username"/>
          <Input placeholder="email" onChange={change} name="email" type="email"/>
          <Input placeholder="password" onChange={change} name="password" type = "password"/>
          <Input placeholder="confirm password" name="confirmPassword" onChange={change}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={signup}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;