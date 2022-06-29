import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  padding: 10px;  

  @media only screen and (min-width: 400px) {
    justify-content: center;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 20px 30px;
    line-height: 1.5;

    box-shadow: 0px 0px 5px rgba(0,2,76,0.7);
    -webkit-box-shadow: 0px 0px 5px rgba(0,2,76,0.7);
    -moz-box-shadow: 0px 0px 5px rgba(0,2,76,0.7);

    @media only screen and (min-width: 600px) {      
      align-items: flex-start;      
      justify-content: center;
    }
  }

  & > ul > li {
    max-width: 290px;
    text-align: justify;
    margin: 0 5px;

    @media only screen and (min-width: 600px) {
      max-width: 600px;
    }

    @media only screen and (min-width: 800px) {
      max-width: 780px;
    }
  }
`;
