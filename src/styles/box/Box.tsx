import styled from "styled-components";
import {Theme} from "../themes/Theme";

export const Box = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.grey.light};
  gap: 10px;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
;
`
