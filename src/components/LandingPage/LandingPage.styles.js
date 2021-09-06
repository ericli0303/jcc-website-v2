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
        right:30%;
        top: 75px;
    
        font-family: Josefin Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 4vw;
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
        right:25%;
        top: 75px;
        
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 4vw;
        line-height: 105%;
        text-align: center;
        
        color: #FFFFFF;
        opacity: 0;
    }
`;

export default StyledLandingPage;