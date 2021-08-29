import React from 'react';
import Box from '@material-ui/core/Box';
import {isDay} from './../Utils/time-helper';
// import Mailchimp from './../MailPage/MailchimpForm';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        const images = [
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/549e9b77-4c90-4c7f-8d0e-772a4ba70576/db9abol-4c3a8d76-9a7a-4850-8448-5dd2dd1c2f32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU0OWU5Yjc3LTRjOTAtNGM3Zi04ZDBlLTc3MmE0YmE3MDU3NlwvZGI5YWJvbC00YzNhOGQ3Ni05YTdhLTQ4NTAtODQ0OC01ZGQyZGQxYzJmMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TJKF4suYIgwR4gsq_B5RqdgKZYKNk3Pkrvg8DHbAkwA",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/549e9b77-4c90-4c7f-8d0e-772a4ba70576/daj4ocm-f915657c-797c-40ee-b7a5-23dd7750457c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU0OWU5Yjc3LTRjOTAtNGM3Zi04ZDBlLTc3MmE0YmE3MDU3NlwvZGFqNG9jbS1mOTE1NjU3Yy03OTdjLTQwZWUtYjdhNS0yM2RkNzc1MDQ1N2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PaAp8z14lGYJi8O6vtI_u7ZCcET_ThsIniENsVrZZuU",
            "https://cdnb.artstation.com/p/assets/images/images/034/631/465/4k/jaume-rovira-llorca-d2.jpg?1612808303"
        ];

        this.state = {
            images,
                currentImg: 0
        }
    }

    componentDidMount() {
        this.changeBackgroundImage();
    }

    componentWillUnmount() {

    }

    changeBackgroundImage() {
        // 1: day
        // 2: night
        let newCurrentImg = 0;

        if (isDay()) {
            newCurrentImg = 1;
        } else {
            newCurrentImg = 2;
        }

        this.setState({ currentImg: newCurrentImg });

    }

    render() {
        const { images, currentImg } = this.state;
        const imgUrl = `url('${images[currentImg]}')`;
        // const gradient = {

        // };

        return (
            <div>
                {/* <div className="gradient"></div> */}
                <div className="App-header" style={{ backgroundImage: imgUrl }}>
                    {/* <Mailchimp /> */}
                </div>
                <Box width="80%">
                    <Box display="flex" flexDirection="row" m={10} flexWrap="wrap">
                        <img 
                            alt='first image landing' 
                            src="https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg"/>
                        <Box mx={5}>
                            <p>Lorem ipsum</p>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" m={10} flexWrap="wrap">
                        <Box mx={5}>
                            <p>Lorem ipsum</p>
                        </Box>
                        <img 
                            alt="second image landing" 
                            src="https://i.redd.it/02g1pfot5ds41.jpg" />
                    </Box>
                </Box>
            </div>
        );
    }
}

export default LandingPage;