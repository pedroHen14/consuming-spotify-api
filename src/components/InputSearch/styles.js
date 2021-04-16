import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  width: 400px;
  position: relative;
  display: flex;
  align-items: center;

  > input {
    border: 0;
    padding-left: 35px;
    padding-right: 10px;
    border-radius: 3px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-family: sans-serif;
    transition: width 0.4s ease-in-out;
  }
  > input:focus + svg {
    color: var(--primary);
  }
`;

export const IconSearch = styled(FaSearch)`
  position: absolute;
  left: 10px;
  font-size: 20px;
  color: var(--darkGray);
  transition: 0.4s ease-in-out;
  cursor: pointer;
`;
