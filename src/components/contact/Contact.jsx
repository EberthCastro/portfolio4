import { useRef } from "react"
import "./contact.css"
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const formRef = useRef ()
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm("service_30y6jhu", "template_mg6jum5", formRef.current, "YpzzOmVlz7uFzoP4Bj")
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });

  }
  
  return (
    <div className="c">
      <div className="c-up">
        <h3 className="c-text">Contact</h3>
      </div>
      <div className="c-down">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="c-down-first">
            <input className="c-input1" type="text" placeholder="   Name" name="user_name"/>
            <input className="c-input1" type="text" placeholder="   Email" name="user_email"/>
          </div>            
            <input className="c-input2" type="text" placeholder="   Subject" name="user_subject"/>
            <textarea className="c-input3" rows="5" placeholder="   Message" name="message"></textarea>
            <button className="c-button">Send Message</button>
                        
        </form>
      </div>
        
    </div>
  )
}

export default Contact
