import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import StyledText from "../../Utils/StyledText/StyledText.styles";
import StyledTitleText from "../../Utils/StyledText/StyledTitleText.styles";
import ActivityCard from "./ActivityCard";
import { CardGroup, Row } from "react-bootstrap";

import  popcorn  from "./../../../img/popcorn.png";
import  cooking  from "./../../../img/cooking.png";
import  game  from "./../../../img/game.png";
import  food  from "./../../../img/food.png";
import  train  from "./../../../img/train.png";
import  learning  from "./../../../img/learning.png";


const ActivityCards = () => {
	const history = useHistory();
    

	return (
        <Row sm={3} md={3} className="g-4" style={{justifyContent: "center"}}>
            <ActivityCard lg="4" title={'Movie Nights'} description={"Come join us to watch authentic Japanese movies!"} image={popcorn}/>
            <ActivityCard lg="4" title={'Game Nights'} description={"Play fun Japanese board games, switch games, and more!"} image={game}/>
            <ActivityCard lg="4" title={'Explore Boston'} description={"Join us in hikes, museums, restaurants, and other fun activities in Greater Boston!"} image={train}/>
            <ActivityCard lg="4" title={'Learn Japanese'} description={"Learn how to speak common Japanese phrases!"} image={learning}/>
            <ActivityCard lg="4" title={'Cooking Sessions'} description={"Cook and enjoy fun Japanese dishes like onigiri, sushi, udon, and more!"} image={cooking}/>
            <ActivityCard lg="4" title={'Friday Outings'} description={"Come eat dinner at new restaurants every Friday!"} image={food}/>
        </Row>
	);
};

export default ActivityCards;
