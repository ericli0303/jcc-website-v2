import styled from "styled-components";
import {isDay} from './../time-helper';

const StyledBackground = styled.div`
    background-color: ${isDay() ? '#516479' : '#292946'};
    padding-bottom: 20px;
`;

export default StyledBackground;