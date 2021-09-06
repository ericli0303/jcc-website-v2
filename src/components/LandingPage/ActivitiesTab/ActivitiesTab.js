import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import StyledText from "../../Utils/StyledText/StyledText.styles";
import StyledTitleText from "../../Utils/StyledText/StyledTitleText.styles";


const ActivitiesTab = () => {
	const history = useHistory();
    
    const styles = {
        textAlign: 'center',
    }

	return (
        <div>
            <StyledTitleText style={styles}>ACTIVITIES</StyledTitleText>
            <StyledText style={styles}>idk some title if you want</StyledText>
        </div>
	);
};

export default ActivitiesTab;
