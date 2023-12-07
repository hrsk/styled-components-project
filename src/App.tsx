import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Box, Button} from "./styles";

export function App() {
    return (
        <Box>
            <h3>STYLED COMPONENTS PROJECT</h3>
{/*            <Button onClick={() => alert('is clicked')}>FIRST STYLED COMPONENT</Button>
            <SupperButton onClick={() => alert('is clicked')}>SUPER BUTTON</SupperButton>
            <Button as={'a'} href={'#'} onClick={() => alert('is clicked')}>BUTTON LINK</Button>
            <Button as={Link} href={'#'} onClick={() => alert('is clicked')}>LINK BUTTON</Button>*/}

            <Button primary color={'black'} background={'yellow'} onClick={() => alert('is clicked')}>FIRST STYLED COMPONENT</Button>
            <Button secondary color={'black'} background={'cyan'} onClick={() => alert('is clicked')}>FIRST STYLED COMPONENT</Button>

        </Box>
    );
}

const SupperButton = styled(Button)`
  background-color: burlywood;
`
