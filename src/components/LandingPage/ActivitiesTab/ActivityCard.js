import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import StyledText from "../../Utils/StyledText/StyledText.styles";
import StyledTitleText from "../../Utils/StyledText/StyledTitleText.styles";
import "./ActivityCard.styles.js";
import { Card } from "react-bootstrap";
import StyledActivityCard from "./ActivityCard.styles.js";

const ActivityCard = ({title, description, link, image}) => {

	return (
		<StyledActivityCard className='cardStyles'>
			<Card.Body>
                <Card.Img className='imgStyles' src={image}/>
				<Card.Title className='titleStyles'>{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted textStyles">
					{description}
				</Card.Subtitle>
			</Card.Body>
		</StyledActivityCard>
	);
};

export default ActivityCard;
