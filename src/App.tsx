import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Rotate} from "./styles/animations";

export function App() {
    return (
        <Box>
            <h3>STYLED COMPONENTS PROJECT</h3>
            <Button onClick={() => alert('is clicked')}>FIRST STYLED COMPONENT</Button>
            <SupperButton onClick={() => alert('is clicked')}>SUPER BUTTON</SupperButton>
            {/*
            спросить как стилизовать такую ссылку
            */}
            <Button as={'a'} href={'#'} onClick={() => alert('is clicked')}>BUTTON LINK</Button>
            <Button as={Link} href={'#'} onClick={() => alert('is clicked')}>LINK BUTTON</Button>
        </Box>
    );
}

const Button = styled.button`
  width: 200px;
  height: 40px;
  align-content: center;
  border-radius: 7px;
  border: solid 1px black;
  font-size: medium;
  background-color: brown;

  &:hover {
    cursor: pointer;
    animation: ${Rotate} 2s ease-in-out;
  }
`

const SupperButton = styled(Button)`
    background-color: burlywood;
`
const Link = styled.a`
  background-color: chartreuse;
  text-align: center;
  text-decoration: none;
`

const Box = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
  gap: 10px;
`