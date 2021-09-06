import { rgba } from "style-value-types";
import styled from "styled-components";
import { isDay } from "../Utils/time-helper";


const StyledLandingPage = styled.div`
    .App-header {
        background-color: rgba(0, 0, 0, 0.3);
        background-blend-mode: multiply;
    }

    & p {
        color: white;
    }

    .clubName {
        position: absolute;
        width: 30%;
        height: 35%;
        left: 50%;
        top: 56%;

        font-family: Josefin Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 245%;
        line-height: 145%;

        /* or 190px */  
        text-align: right;
        letter-spacing: 0.215em;
        text-transform: uppercase;

        color: #FFFFFF;
        opacity: 0;
    }

    .clubNameJP {
        position: absolute;
        width: 4%;
        height: 34%;
        left: 81%;
        top: 53%;
        
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 210%;
        line-height: 105%;
        text-align: center;
        
        color: #FFFFFF;
        opacity: 0;
    }
`;

export default StyledLandingPage;