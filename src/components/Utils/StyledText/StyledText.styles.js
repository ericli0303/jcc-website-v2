import styled from "styled-components";
import { isDay } from "./../time-helper";

const StyledText = styled.p`
	color: ${isDay() ? "black" : "seashell"};
	/* font-size: 4vw; */
	font-family: Montserrat, sans-serif;
	margin-block-start: 0;
	margin-block-end: 0;

	/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
	@media screen and (min-width: 601px) {
		font-size: 60px;
	}

	/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
	@media screen and (max-width: 600px) {
		font-size: 20px;
	}
	//#687d94
	//#7f96b0
`;

export default StyledText;
