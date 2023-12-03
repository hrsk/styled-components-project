import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Box, Button, Link} from "./styles";

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

const SupperButton = styled(Button)`
  background-color: burlywood;
`
