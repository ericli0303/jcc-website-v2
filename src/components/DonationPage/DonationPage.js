
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";


class DonationPage extends React.Component {
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