import styled from "styled-components";

export const Button = styled.button`
  margin: 5px 0;
  width: 100%;
  height: 30px;
  padding: 2px;
  border-radius: 5px;
  font-size: 20px;
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

export const ProjectCard = styled.div`
  max-width: 250px;
  margin: 20px;
  padding: 10px;
  border: 2px solid #00024c;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 10px 0;
  }
`;

export const VideoBackGround = styled.video`
  width: 100%;
  object-fit: cover;
`;

export const ImageBackground = styled.img`
  width: 100%;
  object-fit: cover;
`;
