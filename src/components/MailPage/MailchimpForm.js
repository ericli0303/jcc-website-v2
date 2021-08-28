import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

class MailchimpForm extends Component {
    render() {
        return (
            <Mailchimp
                action="https://facebook.us17.list-manage.com/subscribe/post?u=1867df19c811c72377101ffa1&amp;id=5a4a4a3428"
                fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Email',
                        type: 'email',
                        required: true
                    }
                ]}
            />
        );
    }
}

export default MailchimpForm;
