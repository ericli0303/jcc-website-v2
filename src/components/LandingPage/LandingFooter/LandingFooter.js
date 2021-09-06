import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const titleSize = 15;
const secondTitleSize = 25;

const LandingFooter = () => {
	const socialMediaItems = [
		[
			"Instagram",
			<InstagramIcon fontSize="large" />,
			"https://www.instagram.com/neujcc/",
		],
		[
			"Facebook",
			<FacebookIcon fontSize="large" />,
			"https://www.instagram.com/neujcc/",
		],
		// ["Discord", null, "https://discord.gg/RVkhqma"],
	];

	function makeButton(data) {
		return (
			<button>
				{data[1]}
				{/* <img
					src={data[1]}
					alt={data[0]}
					onClick={() => console.log("Hi!", data)}
				></img> */}
			</button>
		);
	}

	return (
		<p>
			<div style={{ textAlign: "center" }}>
				<p style={{ fontSize: titleSize }}>JOIN US!</p>
				<p style={{ color: "#75B9F8", fontSize: secondTitleSize }}>
					Find us on social media
				</p>
				{socialMediaItems.map(makeButton, this)}
			</div>
		</p>
	);
};

export default LandingFooter;
