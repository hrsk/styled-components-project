import styled, {css} from "styled-components";
import {Rotate} from "../animations";

type ButtonPropsType = {
    color?: string
    background?: string
    fontSize?: string
    primary?: boolean
    secondary?: boolean

}
export const Button = styled.button<ButtonPropsType>`
  color: ${props => props.color || '#BF4F74'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
  background-color: ${props => props.background || null};

  &:hover {
    cursor: pointer;
    //animation: ${Rotate} 2s ease-in-out;
  }
  
  ${props => props.primary && css<ButtonPropsType>`
    &:hover {
      cursor: pointer;
      animation: ${Rotate} 2s ease-in-out;
    }
  `}
`;
