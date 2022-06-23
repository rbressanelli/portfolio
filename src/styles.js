import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f5f5;
`;

export const Main = styled.main`
  text-align: center;
  min-height: 100vh;
  padding: 50px 0;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
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
  padding: 20px;
  display: flex;
  justify-content: center;

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
  width: 200px;
  object-fit: cover;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;

  div#projects-container {
    display: flex;
    flex-direction: row;
  }
`;

export const ProjectCard = styled.div`
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
  margin: 20px 0;
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
  color: #EBEBEB;
  box-shadow: 0 0 15px 0px #868b8e;
  display: block;

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
