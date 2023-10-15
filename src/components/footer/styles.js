import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background: #00024c;

  box-shadow: 0px -9px 10px 4px rgba(0,2,76,0.4);
  -webkit-box-shadow: 0px -9px 10px 4px rgba(0,2,76,0.4);
  -moz-box-shadow: 0px -9px 10px 4px rgba(0,2,76,0.4);

  & > nav > a {
    color: #fff;
    font-size: 2rem;
    margin: 20px;

    & :hover {
      transform: translateY(-15%) scale(1.15);
      transition: 400ms;
    }
  }
`;
