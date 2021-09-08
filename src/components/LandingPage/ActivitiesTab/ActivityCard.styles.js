import { Card } from "react-bootstrap";
import styled from "styled-components";


const StyledActivityCard = styled(Card)`
	text-align: center;

    .imgStyles {
        width: 5em;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;

        /* If the screen size is 451px wide or more*/
        @media screen and (min-width: 451px) {
        }

        /* If the screen size is 450px wide or less*/
        @media screen and (max-width: 450px) {
        }
    }

	.textStyles {

		/* If the screen size is 451px wide or more*/
		@media screen and (min-width: 451px) {
            font-size: 180%;
		}

		/* If the screen size is 450px wide or less*/
		@media screen and (max-width: 450px) {
            font-size: 140%;
		}
	}

	&.cardStyles {
		width: 28rem;
		height: 25rem;
		text-align: center;
		background: rgba(153, 200, 255, 0.16);
		border-radius: 28.7744px;
		margin-left: 15px;
		margin-right: 15px;

		/* If the screen size is 451px wide or more*/
		@media screen and (min-width: 451px) {
		}

		/* If the screen size is 450px wide or less*/
		@media screen and (max-width: 450px) {
		}
	}

	.titleStyles {
        color: white;
		/* If the screen size is 451px wide or more*/
		@media screen and (min-width: 451px) {
			margin-top: 50px;
			margin-bottom: 20px;
			font-size: 250%;
		}

		/* If the screen size is 450px wide or less*/
		@media screen and (max-width: 450px) {
			margin-top: 20px;
			margin-bottom: 15px;
			font-size: 230%;
		}
	}
`;

export default StyledActivityCard;
