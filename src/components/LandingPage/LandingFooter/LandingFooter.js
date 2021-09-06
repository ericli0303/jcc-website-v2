import StyledTitleText from "../../Utils/StyledText/StyledTitleText.styles";
import StyledText from "../../Utils/StyledText/StyledText.styles";
import { ReactComponent as DiscordIcon } from "../../../img/discord.svg";
import { ReactComponent as FacebookIcon } from "../../../img/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../img/instagram.svg";
import "./socialMediaIcons.css";

const LandingFooter = () => {
	const socialMediaItems = [
		{
			icon: (
				<div
					className="iconContainer"
					onMouseUp={() => window.open("https://www.instagram.com/neujcc")}
					style={{
						backgroundImage:
							"linear-gradient(to bottom left, #C32AA3, #4C5FD7, #7232BD, #F46F30, #FFDC7D)",
					}}
				>
					<InstagramIcon className="icon" fill="white" />
				</div>
			),
		},
		{
			icon: (
				<div
					onMouseUp={() => window.open("https://www.instagram.com/neujcc/")}
					className="iconContainer"
					style={{
						backgroundColor: "#1877f2",
					}}
				>
					<FacebookIcon className="icon" fill="white" />
				</div>
			),
		},
		{
			icon: (
				<div
					onMouseUp={() => window.open("https://discord.gg/RVkhqma")}
					className="iconContainer"
					style={{
						backgroundColor: "#7289DA",
					}}
				>
					<DiscordIcon className="icon" fill="white" />
				</div>
			),
		},
	];

	return (
		<div style={{ textAlign: "center", paddingBottom: "5rem" }}>
			<StyledTitleText>JOIN US!</StyledTitleText>
			<StyledText>Find us on social media</StyledText>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					paddingTop: "3rem",
				}}
			>
				{socialMediaItems.map((item) => item.icon)}
			</div>
		</div>
	);
};

export default LandingFooter;
