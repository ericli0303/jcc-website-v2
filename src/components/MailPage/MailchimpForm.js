import React, { Component } from 'react';
// import the component
import { PropTypes } from 'prop-types';
import jsonp from 'jsonp';
import toQueryString from 'to-querystring';
import SimpleForm from './SimpleForm';

const getAjaxUrl = url => url.replace("/post?", "/post-json?");



class MailchimpForm extends Component {
    state = {
        status: null,
        message: null,
      };


    componentDidMount() {

    }


    subscribe = data => {
        const params = toQueryString(data);
        const url = getAjaxUrl(this.props.url) + "&" + params;
        this.setState(
          {
            status: "sending",
            message: null
          },
          () =>
            jsonp(
              url,
              {
                param: "c"
              },
              (err, data) => {
                if (err) {
                  this.setState({
                    status: "error",
                    message: "Unknown error"
                  });
                } else if (data.result !== "success") {
                  this.setState({
                    status: "error",
                    message: "You're already subscribed"
                  });
                } else {
                  this.setState({
                    status: "success",
                    message: "Thank you for subscribing!"
                  });
                }
              }
            )
        );
      };

    render() {
        return this.props.render({
          subscribe: this.subscribe,
          status: this.state.status,
          message: this.state.message,
        });
    }
}

MailchimpForm.propTypes = {
    render: PropTypes.func,
    url: PropTypes.string.isRequired
  };

MailchimpForm.defaultProps = {
    render: ({ subscribe, status, message}) => {
        
        return (
            <div>
                <div className="App-header">
                    <SimpleForm
                        status={status}
                        message={message}
                        onSubmitted={formData => subscribe(formData)}
                    />
                </div>
            </div>
        )
    },
    url: "https://facebook.us17.list-manage.com/subscribe/post?u=1867df19c811c72377101ffa1&amp;id=5a4a4a3428"
};

export default MailchimpForm;
