import styled from "styled-components";
import {isDay} from './../time-helper';

const StyledBackground = styled.div`
    background-color: ${isDay() ? '#ffffff' : '#292946'};

    .text {
        color: ${isDay() ? 'black' : 'seashell'};
    }
    //#687d94
    //#7f96b0
    
    
`;

export default StyledBackground;