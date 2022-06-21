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
