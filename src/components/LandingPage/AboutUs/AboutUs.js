import StyledText from "../../Utils/StyledText/StyledText.styles";
import StyledTitleText from "../../Utils/StyledText/StyledTitleText.styles";
import { isDay } from "../../Utils/time-helper";
import jccBanner from "../../../img/jcc_banner.png"
import useWindowDimensions from "../../useWindowDimensions";

const AboutUs = () => {
	const color = isDay() ? "black" : "seashell";

	const {width, height} = useWindowDimensions();

	const isSmallViewport = width < 1330

	return (
		<div style={{ display: isSmallViewport ? "block" : "flex", padding: "3rem", textAlign: isSmallViewport ? "center" : "left"}}>
			<div style={{flex: 4, display: "flex", justifyContent: "center"}}>
				<img src={jccBanner} style={{height: "100%", borderRadius: "30px"}}/>
			</div>
			<div style={{flex: 5, justifyContent: "center", display: "flex", flexDirection: "column"}}>
				{isSmallViewport && <br/>}
				<StyledTitleText>ABOUT US</StyledTitleText>
				<StyledText style={{paddingRight: isSmallViewport ? 0 : '5rem'}}>NEU's Official Japanese Culture Club</StyledText>
				<p
					style={{
						color: color,
						fontSize: '1.3rem',
						paddingTop: '2rem',
						paddingRight: isSmallViewport ? 0 : '5rem',
					}}
				>
					The Northeastern Japanese Culture Club is a student organization
					dedicated to learning and experiencing the many aspects of
					Japanese culture. We are a close-knit group of people sharing
					the same passion. We hold weekly meetings during the school year
					and go on field trips to restaurants, stores, and cultural
					attractions. If you’re interested in any aspect of Japanese
					culture or just want to hang out for dinner, come and join us!
				</p>
			</div>
			{/* <div style={{flex: 1}}></div> */}
		</div>
	);
};

export default AboutUs;
