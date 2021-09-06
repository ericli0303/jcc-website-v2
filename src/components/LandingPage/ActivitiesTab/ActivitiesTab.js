import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import StyledText from "../../Utils/StyledText/StyledText.styles";
import StyledTitleText from "../../Utils/StyledText/StyledTitleText.styles";
import ActivityCards from "./ActivityCards"


const ActivitiesTab = () => {
	const history = useHistory();
    
    const titleStyles = {
        textAlign: 'center',
        marginTop: '20px'
    }

    const textStyles = {
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '40px'
    }

	return (
        <div>
            <StyledTitleText style={titleStyles}>ACTIVITIES</StyledTitleText>
            <StyledText style={textStyles}>Join Us In Our Fun Activities!</StyledText>
            <ActivityCards />
        </div>
	);
};

export default ActivitiesTab;
