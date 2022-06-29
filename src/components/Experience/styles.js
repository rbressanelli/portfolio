import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  padding: 20px 10px;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  line-height: 1.5;
  max-width: 290px;

  box-shadow: 0px 0px 5px rgba(0, 2, 76, 0.7);
  -webkit-box-shadow: 0px 0px 5px rgba(0, 2, 76, 0.7);
  -moz-box-shadow: 0px 0px 5px rgba(0, 2, 76, 0.7);

  & > h4 > spam {
    font-weight: 400;
  }

  @media only screen and (min-width: 400px) {
    justify-content: center;
    max-width: 370px;
  }

  @media only screen and (min-width: 600px) {
    max-width: 90%;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 800px;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;

    @media only screen and (min-width: 600px) {
      align-items: flex-start;
      justify-content: center;
    }
  }

  & > ul > li {
    max-width: 280px;
    text-align: justify;
    margin: 0 5px;

    @media only screen and (min-width: 600px) {
      max-width: 600px;
    }

    @media only screen and (min-width: 800px) {
      max-width: 800px;
    }
  }
`;
