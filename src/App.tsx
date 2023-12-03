import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Rotate} from "./styles/animations";

export function App() {
    return (
        <div className="App">
            <h3>STYLED COMPONENTS PROJECT</h3>
            <Button onClick={() => alert('is clicked')}>FIRST STYLED COMPONENT</Button>
        </div>
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