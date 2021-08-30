import React, { Component } from 'react';
// import the component
import { PropTypes } from 'prop-types';
import jsonp from 'jsonp';
import toQueryString from 'to-querystring';
import SimpleForm from './SimpleForm';

const getAjaxUrl = url => url.replace("/post?", "/post-json?");

const images = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/549e9b77-4c90-4c7f-8d0e-772a4ba70576/db9abol-4c3a8d76-9a7a-4850-8448-5dd2dd1c2f32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU0OWU5Yjc3LTRjOTAtNGM3Zi04ZDBlLTc3MmE0YmE3MDU3NlwvZGI5YWJvbC00YzNhOGQ3Ni05YTdhLTQ4NTAtODQ0OC01ZGQyZGQxYzJmMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TJKF4suYIgwR4gsq_B5RqdgKZYKNk3Pkrvg8DHbAkwA",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/549e9b77-4c90-4c7f-8d0e-772a4ba70576/daj4ocm-f915657c-797c-40ee-b7a5-23dd7750457c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU0OWU5Yjc3LTRjOTAtNGM3Zi04ZDBlLTc3MmE0YmE3MDU3NlwvZGFqNG9jbS1mOTE1NjU3Yy03OTdjLTQwZWUtYjdhNS0yM2RkNzc1MDQ1N2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PaAp8z14lGYJi8O6vtI_u7ZCcET_ThsIniENsVrZZuU",
    "https://cdnb.artstation.com/p/assets/images/images/034/631/465/4k/jaume-rovira-llorca-d2.jpg?1612808303"
];


class MailchimpForm extends Component {
    state = {
        status: null,
        message: null,
        currentImg: 0
      };


    componentDidMount() {
        this.changeBackgroundImage();
    }

    changeBackgroundImage() {
        // currentImg 
        // 0: morning
        // 1: day
        // 2: night
        let newCurrentImg = 0;

        var clientTime = new Date();

        if (7 <= clientTime.getHours() && clientTime.getHours() < 12) {
            newCurrentImg = 0;
        }
        else if (12 <= clientTime.getHours() && clientTime.getHours() < 20) {
            newCurrentImg = 1;
        }
        else {
            newCurrentImg = 2;
        }

        this.setState({ currentImg: newCurrentImg });

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
                    message: err
                  });
                } else if (data.result !== "success") {
                  this.setState({
                    status: "error",
                    message: data.msg
                  });
                } else {
                  this.setState({
                    status: "success",
                    message: data.msg
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
          currentImg: this.state.currentImg
        });
    }
}

MailchimpForm.propTypes = {
    render: PropTypes.func,
    url: PropTypes.string.isRequired
  };

MailchimpForm.defaultProps = {
    render: ({ subscribe, status, message, currentImg }) => {
        const imgUrl = `url('${images[currentImg]}')`;
        
        return (
            <div>
                <div className="App-header" style={{ backgroundImage: imgUrl }}>
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
