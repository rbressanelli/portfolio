import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 800px) {
    max-width: 100%;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 10px;

    @media only screen and (min-width: 800px) {
      :hover {
        transform: scale(1.05);
        transition: 300ms;
      }
    }
  }
`;
