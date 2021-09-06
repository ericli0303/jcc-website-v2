import StyledText from "../../Utils/StyledText/StyledText.styles";
import StyledTitleText from "../../Utils/StyledText/StyledTitleText.styles";
import { isDay } from "../../Utils/time-helper";

const AboutUs = () => {
	const color = isDay() ? "black" : "seashell";

	return (
		<div style={{ textAlign: "center" }}>
			<StyledTitleText>ABOUT US</StyledTitleText>
			<StyledText>NEU's Official Japanese Culture Club</StyledText>
			{/* TODO: Refactor styling */}
			<p
				style={{
					color: color,
					fontSize: 20,
					padding: "0 20% 0 20%",
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
	);
};

export default AboutUs;
