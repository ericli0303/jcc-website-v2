import { rgba } from "style-value-types";
import styled from "styled-components";
import { isDay } from "../Utils/time-helper";


const StyledLandingPage = styled.div`
    p {
        margin: 0; // removes default margin
    }

    .App-header {
        background-color: rgba(0, 0, 0, 0.3);
        background-blend-mode: multiply;
    }

    .titleRootContainer {
        position: absolute;
        right: 10%;
        bottom: 10%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    
    .titleEN {
        font-family: Josefin Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 3rem;
        padding-top: 1rem;
        display: block;

        text-align: right;
        letter-spacing: 1rem;
        text-transform: uppercase;

        color: #FFFFFF;
        // opacity: 0;
    }

    .titleJP {
        writing-mode: vertical-rl;
        
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 5rem;
        text-align: center;
        
        color: #FFFFFF;
    }

    @media only screen and (max-width: 600px) {
        .titleEN {
            font-size: 2.5rem;
        }

        .titleJP {
            font-size: 4rem;
        }
    }

    @media only screen and (max-width: 512px) {
        .titleEN {
            font-size: 2rem;
        }

        .titleJP {
            font-size: 3rem;
        }
    }

    @media only screen and (max-width: 436px) {
        .titleEN {
            font-size: 1.5rem;
        }

        .titleJP {
            font-size: 2rem;
        }
    }

    @media only screen and (max-width: 350px) {
        .titleEN {
            font-size: 1rem;
        }

        .titleJP {
            font-size: 1.5rem;
        }
    }

    .titleJPContainer {
    }

    .titleENContainer {
        marign-top: 300px
    }

    
`;

export default StyledLandingPage;