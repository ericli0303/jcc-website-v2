import {React, useState} from 'react';
import './SimpleForm.styles.css'

const SimpleForm = ({ status, message, className, style, onSubmitted}) => {
    let input;

    const submit = () => 
        input &&
        input.value.indexOf("@") > -1 &&
        onSubmitted({
        EMAIL: input.value
    });

    return (
        <div>
            <h2 style={{color: "white"}}>Join our mailing list!</h2>
            <div className={className} style={style}>
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && (
                    <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === "success" && (
                    <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}  
            <div className="field">
                <input
                    ref={node => (input = node)}
                    type="email"
                    placeholder="Your email"
                />
                </div>
                <button className="button button--mimas" onClick={submit}><span>Submit</span></button>
            </div>
        </div>
      );
}

export default SimpleForm;