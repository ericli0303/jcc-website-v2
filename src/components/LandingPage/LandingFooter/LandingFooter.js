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
						backgroundImage:
							"linear-gradient(to bottom left, #C32AA3, #4C5FD7, #7232BD, #F46F30, #FFDC7D)",
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
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						marginTop: "2rem",
						marginBottom: "2rem",
					}}
				>
					{socialMediaItems.map((item) => item.icon)}
				</div>
			</div>
		</p>
	);
};

export default LandingFooter;
