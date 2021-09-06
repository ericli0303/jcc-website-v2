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
import  learning  from "./../../../img/presentation-learning.png";


const ActivityCards = () => {
	const history = useHistory();
    

	return (
        <Row s={1} md={3} className="g-4" style={{justifyContent: "center"}}>
            <ActivityCard title={'Movie Nights'} description={"Come join us to watch authentic Japanese movies!"} image={popcorn}/>
            <ActivityCard title={'Game Nights'} description={"Play fun Japanese board games, switch games, and more!"} image={game}/>
            <ActivityCard title={'Exploring Greater Boston'} description={"Join us in hikes, museums, restaurants, and other fun activities in Greater Boston!"} image={train}/>
            <ActivityCard title={'Learn Japanese'} description={"Learn how to speak common Japanese phrases!"} image={learning}/>
            <ActivityCard title={'Cooking Sessions'} description={"Cook and enjoy fun Japanese dishes like onigiri, sushi, udon, and more!"} image={cooking}/>
            <ActivityCard title={'Friday Outings'} description={"Come eat dinner at new restaurants every Friday!"} image={food}/>
        </Row>
	);
};

export default ActivityCards;
