import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import "./DonationPage.styles.css";

class DonationPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 5.0,
		};
	}

	setAndValidateValue(event) {
		var regex = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
		var numStr = event.target.value;
		var myInput = document.getElementById("validation");
		if (regex.test(numStr)) {
			myInput.classList.remove("invalid");
			myInput.classList.add("valid");
		} else {
			myInput.classList.remove("valid");
			myInput.classList.add("invalid");
		}
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div className="App-header">
				<div id="message">
					<p id="validation" class="valid">
						{" "}
						Amount is Invalid{" "}
					</p>
				</div>

				<div class="text">
					<h2>Amount for Donation:</h2>
				</div>

				<div>
					<input
						type="text"
						id="textType"
						value={this.state.value}
						onChange={(event) => this.setAndValidateValue(event)}
						size="3"
					/>
					<input
						id="rangeType"
						type="range"
						min="1.00"
						max="100.00"
						defaultValue="5"
						value={this.state.value}
						onChange={(event) => this.setAndValidateValue(event)}
						step="1.00"
					/>
				</div>

				<div style={{ padding: "25px" }}>
					<PayPalButton
						/*
                            NEED TO TEST THIS BY CREATING A SAND BOX ACCOUNT
                            clientID="ASLDKJASLDKJASLDKJ"
                        */

						amount={this.state.value}
						onSuccess={(details) => {
							return alert(
								"Transaction completed by " +
									details.payer.name.given_name
							);
						}}
						onButtonReady={() =>
							this.setState({ showLoading: false })
						}
					/>
				</div>
			</div>
		);
	}
}

export default DonationPage;
