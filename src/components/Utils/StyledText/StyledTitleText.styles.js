import styled from "styled-components";
import {isDay} from './../time-helper';

const StyledTitleText = styled.h1`
    color: #75B9F8;
    font-family: 'Nunito', sans-serif;
    /* font-size: 2.5vw; */
    margin-block-end: 0;
    //#687d94
    //#7f96b0

    /* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
    @media screen and (min-width: 601px) {
        font-size: 40px;
    }

    /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
    @media screen and (max-width: 600px) {
        font-size: 15px;
    }
    
`;

export default StyledTitleText;