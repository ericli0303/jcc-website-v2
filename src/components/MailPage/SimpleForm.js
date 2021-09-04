import {React, useEffect, useState} from 'react';
import './SimpleForm.styles.css'
import {isDay} from './../Utils/time-helper';
import banner from './../../img/banner.png'


const SimpleForm = ({ status, message, className, style, onSubmitted}) => {
    const [email, setEmail] = useState("");
    const [invalidEmail, setInvalid] = useState(false);
    let input;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email)) {
            setInvalid(false);
            onSubmitted({
                EMAIL: email
            });
        }
        else  {
            setInvalid(true);
        }
                
        setEmail("");
    }

    const backgroundStyle = {
        backgroundColor: isDay() ? '#ebd3ba' : '#105d81'
      };

    return (
        <div className="content__item">
            <h2 className='text' id="mailing">Join our mailing list!</h2>
            <div className={className} style={style}>
                <form>
                    <div className="field">
                        <input
                            ref={node => (input = node)}
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="mailingButton mailingButton--pan" 
                        onClick={handleSubmit}
                        style={backgroundStyle}>
                        <span>Submit</span>
                    </button> 
                    <div
                        className="text mailingSubmitMessage"
                        style={{ color: (invalidEmail || status === "error") 
                                        ? "red"
                                        : "green"}}
                        dangerouslySetInnerHTML={{ __html: invalidEmail ? "Invalid email" 
                                                    : message }}
                    />
                </form>  
            </div>          
        </div>
      );
}

export default SimpleForm;