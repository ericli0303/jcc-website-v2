import React from 'react';
import { render } from 'react-dom'
import './style.css'

const SimpleForm = ({ status, message, className, style, onSubmitted}) => {
    let input;

    const submit = () =>
        input &&
        input.value.indexOf("@") > -1 &&
        onSubmitted({
        EMAIL: input.value
    });

    return (
        <div className="content__item">
            <h2 className='text' id="mailing">Join our mailing list!</h2>
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
            <div class="field">
                <input
                    ref={node => (input = node)}
                    type="email"
                    placeholder="Your email"
                />
                </div>
                <button className="button button--pan"  onClick={submit}>
                    <p>Submit</p>
                </button>    
            </div>
        </div>
      );
}

export default SimpleForm;