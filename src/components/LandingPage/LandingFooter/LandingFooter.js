import StyledTitleText from "../../Utils/StyledText/StyledTitleText.styles";
import StyledText from "../../Utils/StyledText/StyledText.styles";
import { ReactComponent as DiscordIcon } from "../../../img/discord.svg";
import { ReactComponent as FacebookIcon } from "../../../img/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../img/instagram.svg";
import "./socialMediaIcons.css";

const LandingFooter = () => {
	const socialMediaItems = [
		{
			title: "Instagram",
			icon: (
				<div
					className="iconContainer"
					style={{
						backgroundColor: "#515bd4",
					}}
				>
					<InstagramIcon className="icon" fill="white" />
				</div>
			),
			url: "https://www.instagram.com/neujcc/",
		},
		{
			title: "Facebook",
			icon: (
				<div
					className="iconContainer"
					style={{
						backgroundColor: "#1877f2",
					}}
				>
					<FacebookIcon className="icon" fill="white" />
				</div>
			),
			url: "https://www.instagram.com/neujcc/",
		},
		{
			title: "Discord",
			icon: (
				<div
					className="iconContainer"
					style={{
						backgroundColor: "#7289DA",
					}}
				>
					<DiscordIcon className="icon" fill="white" />
				</div>
			),
			url: "https://discord.gg/RVkhqma",
		},
	];

	return (
		<p>
			<div style={{ textAlign: "center" }}>
				<StyledTitleText>JOIN US!</StyledTitleText>
				<StyledText>Find us on social media</StyledText>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					{socialMediaItems.map((item) => item.icon)}
				</div>
				<br />
			</div>
		</p>
	);
};

export default LandingFooter;
