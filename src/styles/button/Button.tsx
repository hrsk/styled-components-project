import styled from "styled-components";
import {Rotate} from "../animations";

export const Button = styled.button`
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
