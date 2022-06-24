import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    /* height: 50px; */
    background: #9b9ba6;
    background: linear-gradient(90deg, #9b9ba6 0%, #0d0f14 80%);
    background: -webkit-linear-gradient(90deg, #9b9ba6 0%, #0d0f14 80%);
    background: -moz-linear-gradient(90deg, #9b9ba6 0%, #0d0f14 80%);

    box-shadow: 0px 9px 10px -4px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 0px 9px 10px -4px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 9px 10px -4px rgba(0, 0, 0, 0.7);

    position: fixed;
    top: 0;
    z-index: 2;

    h1 {
        width: 100%;       
        text-align: center;
        font-size: 25px;
        padding: 20px 0 20px;
        margin: 0 auto;
        text-shadow: 0px 1px 28px rgba(255, 255, 255, 1);

        @media only screen and (min-width: 400px) {
            font-size: 30px;
        }

        @media only screen and (min-width: 800px) {
        }
    }

    div {
        font-size: 50px;
        display: inline;
        position: absolute;
        top: 25px;
        left: 20px;

        a {
            color: var(--text-color);
        }

        @media only screen and (min-width: 800px) {
            cursor: pointer;
        }

        a {
            :hover {
                color: var(--home-icon-hover-color);
            }
        }
    }
`;
