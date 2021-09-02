import {React, useState} from 'react';
import './SimpleForm.styles.css'

const SimpleForm = ({ status, message, className, style, onSubmitted}) => {
    const [email, setEmail] = useState("");
    const [invalidEmail, setInvalid] = useState(false);
    let input;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email)) {
            setInvalid(false);
            console.log(email)
            onSubmitted({
                EMAIL: email
            });
        }
        else  {
            setInvalid(true);
        }

        setEmail("");
    }

    return (
        <div className="content__item" style={{width: "auto"}}>
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
                        onClick={handleSubmit}>
                        <span>Submit</span>
                    </button> 
                    {status === "error" && (
                        <div
                        className="text mailingSubmitMessage"
                        style={{ color: "red"  }}
                        dangerouslySetInnerHTML={{ __html: "You're already subscribed." }}
                        />
            )}
                    {status === "success" && !invalidEmail && (
                        <div
                        className="text mailingSubmitMessage"
                        style={{ color: "green" }}
                        dangerouslySetInnerHTML={{ __html: "Thank you for subscribing" }}
                        />
                    )}  
                    {invalidEmail && (
                        <div
                        className="text mailingSubmitMessage"
                        style={{ color: "red" }}
                        dangerouslySetInnerHTML={{ __html: "Invalid email" }}
                        />
                    )}  
                </form>  
            </div>
            
        </div>
      );
}

export default SimpleForm;