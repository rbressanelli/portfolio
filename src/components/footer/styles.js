import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background: #9b9ba6;
  background: linear-gradient(90deg, #0d0f14 0%, #9b9ba6 80%);
  background: -webkit-linear-gradient(90deg, #0d0f14 0%, #9b9ba6 80%);
  background: -moz-linear-gradient(90deg, #0d0f14 0%, #9b9ba6 80%);

  box-shadow: 0px 9px 10px -4px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 9px 10px -4px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 9px 10px -4px rgba(0, 0, 0, 0.7);

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
