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

  @media only screen and (min-width: 600px) {
    justify-content: center;
    flex-direction: row;
    /* align-items: center; */
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
  justify-content: center;
  align-items: center;
  max-width: 400px;
`;

export const Tecnologies = styled.div`
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

export const VideoBackGround = styled.video`
  width: 100%;
  object-fit: cover;
`;

export const ImageBackground = styled.img`
  width: 100%;
  object-fit: cover;
`

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

export const ProjectCard = styled.div`
  max-width: 250px;
  margin: 20px;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 10px 0;
  }
`;

export const LinkDeploy = styled.button`
  margin: 5px 0;
  width: 100%;
  height: 30px;
  border: transparent;
  border-radius: 5px;

  background-image: linear-gradient(
    to right,
    #282e7b 0%,
    #4889ea 51%,
    #282e7b 100%
  );

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #ebebeb;
  box-shadow: 0 0 15px 0px #868b8e;
  display: block;

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  margin: 5px 0;
  width: 100%;
  height: 30px;
  padding: 2px;
  /* border: transparent; */
  border-radius: 5px;
  font-size: 20px;
`;
