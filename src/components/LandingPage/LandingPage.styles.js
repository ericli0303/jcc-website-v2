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


`;

export default StyledLandingPage;