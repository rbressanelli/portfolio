import styled from "styled-components";

export const Modal = styled.div`    
    top: 20%;
    min-width: 90vw;
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

    @media only screen and (min-width: 400px) {
        min-width: 380px;
        max-width: 400px;
        left: 10px;
    }
    @media only screen and (min-width: 600px) {
        left: 50vw;
        transform: translateX(-50%);        
        /* max-height: 55vh; */
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
    

    & > img {
        width: 200px;
        margin: 20px 0;
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
        margin: 5px 0;

        @media only screen and (min-width: 400px) {
            max-width: 350px;
            margin: 10px 0;
        }

        @media only screen and (min-width: 1200px) {
            max-width: 400px;
            margin: 10px 0;
        }
    }
`
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
`
