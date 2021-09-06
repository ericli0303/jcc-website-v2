import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { isDay } from "./../Utils/time-helper";
import StyledLandingPage from "./LandingPage.styles";
import ActivitiesTab from "./ActivitiesTab/ActivitiesTab";
import { motion } from "framer-motion";
import LandingFooter from "./LandingFooter/LandingFooter";
import AboutUs from "./AboutUs/AboutUs";
import FadeIn from 'react-fade-in';

const LandingPage = () => {
	const images = [
		"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/549e9b77-4c90-4c7f-8d0e-772a4ba70576/daj4ocm-f915657c-797c-40ee-b7a5-23dd7750457c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU0OWU5Yjc3LTRjOTAtNGM3Zi04ZDBlLTc3MmE0YmE3MDU3NlwvZGFqNG9jbS1mOTE1NjU3Yy03OTdjLTQwZWUtYjdhNS0yM2RkNzc1MDQ1N2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PaAp8z14lGYJi8O6vtI_u7ZCcET_ThsIniENsVrZZuU",
		"https://cdnb.artstation.com/p/assets/images/images/034/631/465/4k/jaume-rovira-llorca-d2.jpg?1612808303",
	];

	const currImg = images[isDay() ? 0 : 1];

	const imgUrl = `url('${currImg}')`;

	return (
		<StyledLandingPage>
			<div className="App-header" style={{ backgroundImage: imgUrl }}>
				<Box className="titleRootContainer">
					<FadeIn
						className={"titleENContainer"}
						delay={400}
						transitionDuration={800}
					>
						<p className="titleEN">
							Japanese
						</p>
						<p className="titleEN">
							Culture
						</p>
						<p className="titleEN">
							Club
						</p>
					</FadeIn>
					<FadeIn
						className={"titleJPContainer"}
						delay={200}
						transitionDuration={700}
					>
						<p className="titleJP">
							日本文化部
						</p>
					</FadeIn>
				</Box>
			</div>
			<Box>
				<AboutUs></AboutUs>
			</Box>

			<Box display="block" mx="auto" width={0.8}>
				<ActivitiesTab />
			</Box>
			<br style={{paddingTop: "3rem"}}/>
			<br/>
			<Box>
				<LandingFooter></LandingFooter>
			</Box>
		</StyledLandingPage>
	);
};

export default LandingPage;
