import styled from "styled-components";

export const Modal = styled.div`
  top: 15%;
  left: 5vw;
  min-width: 90vw;
  max-height: 80vh;
  position: fixed;
  background: rgba(251, 248, 239, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  border-top: 5px solid darkblue;
  border-bottom: 5px solid darkblue;
  font-size: 18px;
  box-shadow: 1px 1px 20px 5px #0a0a0a;
  z-index: 1;
  overflow: auto;

  & > ::-webkit-scrollbar {    
    width: 5px; 
  }

  & > ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 8px #00024c;
    border-radius: 10px;
    margin: 230px 0 0 0;
    
  }
  
  & > ::-webkit-scrollbar-thumb {
    background: #00024c;
    border-radius: 10px;
  }

  & > ::-webkit-scrollbar-thumb:hover {
    background: #00024c;
  }

  @media only screen and (min-width: 400px) {
    min-width: 380px;
    max-width: 400px;
    left: 10px;
  }
  @media only screen and (min-width: 600px) {
    left: 50vw;
    transform: translateX(-50%);
  }

  @media only screen and (min-width: 800px) {
    min-width: 600px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  overflow: auto;
  height: auto;

  & > img {
    width: 200px;
    margin: 20px 5px;
    border-radius: 5px;
    box-shadow: 1px 1px 20px 5px #ccc;

    @media only screen and (min-width: 400px) {
      width: 300px;
    }

    @media only screen and (min-width: 1200px) {
      width: 400px;
    }
  }

  & > p {
    max-width: 250px;
    text-align: justify;
    margin: 5px;
    padding: 0 10px;
    

    @media only screen and (min-width: 400px) {
      max-width: 350px;
      margin: 10px 0;
    }

    @media only screen and (min-width: 1200px) {
      max-width: 400px;
      margin: 10px 0;
    }
  }
`;
export const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  border: 2px solid transparent;
  font-variant: small-caps;
  font-weight: 700;
  background-color: #282e7b;
  color: #fff;

  :hover {
    box-shadow: 0 0 15px 0px #868b8e;
  }
`;
