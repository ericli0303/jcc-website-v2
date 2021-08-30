
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

import StyledDonationPage from './DonationPage.styles';

class DonationPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
                <div className="App-header">
                    <PayPalButton
                        /*
                            NEED TO TEST THIS BY CREATING A SAND BOX ACCOUNT
                            clientID="ASLDKJASLDKJASLDKJ"
                        */
                        amount="0.01"
                        onSuccess={(details) => {
                            return alert("Transaction completed by " + details.payer.name.given_name)
                        }}
                        onButtonReady={() => this.setState({ showLoading: false })}
                    />
                </div>
        );
    }
}

export default DonationPage