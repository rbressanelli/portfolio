import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f5f5;

  @media only screen and (min-width: 600px) {
  }
`;

export const Main = styled.main`
  text-align: center;
  min-height: 100vh;
  padding: 100px 0;
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    margin: 20px;
    padding: 10px;
    border-left: 1px solid #00024c;
    border-top: 1px solid #00024c;
    border-top-left-radius: 10px;
    cursor: pointer; 

    :hover {
      background-color: #eee;
    }
  }


  @media only screen and (min-width: 600px) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const ImageCard = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;

  img {
    width: 250px;
    height: 250px;
    border: 4px solid #aaa;
    border-radius: 100%;
    object-fit: cover;

    @media only screen and (min-width: 800px) {
      :hover {
        transform: scale(1.02);
        transition: 500ms;
      }
    }
  }
`;

export const Description = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;

  & > h1 {
    margin-bottom: 10px;
  }

  & > p {
    margin: 5px 0;
    text-align: justify;
  }

  & > p#contact > a {
    font-size: 1.2rem;
    font-variant: small-caps;
    color: #00024c;
    padding: 1px 10px 2px;

    :hover {
      background-color: #00024c;
      color: #fff;
    }
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;

  div#projects-container {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 600px) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const Formation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  padding: 10px;
  margin: 20px auto;
  text-align: justify;

  & > p {
    margin: 5px 0;
  } 

  @media only screen and (min-width: 400px) {
    max-width: 380px;
  }

  @media only screen and (min-width: 600px) {
    max-width: 500px;
  }

  @media only screen and (min-width: 800px) {
    max-width: 700px;
  }
`;

export const VerticalSpace = styled.div`
  height: 50px;
`;

export const Certificates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    cursor: pointer;
  }

  & > img {
    width: 100px;
    margin: 20px;

    @media only screen and (min-width: 600px) {
      :active {
        margin: 0 auto;
        transform: scale(10);
      }
    }
  }
`;
