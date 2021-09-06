import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const LandingFooter = () => {
	const socialMediaItems = [
		[
			"Instagram",
			<InstagramIcon fontSize="large" />,
			"https://www.instagram.com/neujcc/",
		],
		["Facebook", <FacebookIcon />, "https://www.instagram.com/neujcc/"],
		["Discord", null, "https://discord.gg/RVkhqma"],
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
			<div>
				<p>JOIN US!</p>
				<p>Find us on social media</p>
			</div>
			{socialMediaItems.map(makeButton, this)}
		</p>
	);
};

export default LandingFooter;
