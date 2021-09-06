import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import StyledText from "../../Utils/StyledText/StyledText.styles";
import StyledTitleText from "../../Utils/StyledText/StyledTitleText.styles";
import { Card } from "react-bootstrap";

const ActivityCard = ({title, description, link, image}) => {
	const history = useHistory();

    const imgStyles = {
        width: '5em', 
        display: 'block', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        marginTop: '30px'
    };

    const titleStyles = {
        marginTop: "50px",
        marginBottom: "20px",
        fontSize: '250%'
    };

    const textStyles = {
        fontSize: '180%'
    };

    const cardStyles = { 
        width: "30rem", 
        height: "25rem", 
        textAlign: 'center', 
        background: 'rgba(153, 200, 255, 0.16)',
        borderRadius: '28.7744px',
        marginLeft: '15px',
        marginRight: '15px'

    };

	return (
		<Card style={cardStyles}>
			<Card.Body>
                <Card.Img style={imgStyles} src={image}/>
				<Card.Title style={titleStyles}>{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted" style={textStyles}>
					{description}
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};

export default ActivityCard;
