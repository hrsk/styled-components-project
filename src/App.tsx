import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Rotate} from "./styles";

export function App() {
    return (
        <Box>
            <h3>STYLED COMPONENTS PROJECT</h3>
            <Button onClick={() => alert('is clicked')}>FIRST STYLED COMPONENT</Button>
            <SupperButton onClick={() => alert('is clicked')}>SUPER BUTTON</SupperButton>
            <Button as={'a'} href={'#'} onClick={() => alert('is clicked')}>BUTTON LINK</Button>
            <Button as={Link} href={'#'} onClick={() => alert('is clicked')}>LINK BUTTON</Button>
        </Box>
    );
}

const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;

  &:hover {
    cursor: pointer;
    animation: ${Rotate} 2s ease-in-out;
  }
`;

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

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
;
`