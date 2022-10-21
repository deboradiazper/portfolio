import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
  
  const form = useRef(null);

  //email js template/presets + reset input
  const sendEmail=(e)=> {
    e.preventDefault();

    emailjs.sendForm('service_zkai9zg', 'template_vs5bb3u', form.current, '4r9FdI6Jp62p5f0Hm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  
  
  return (

    //form (uncontrolled)
    <form ref={form} onSubmit={sendEmail} className="rowForm flex-column text-center">

      <div className="Name col-auto">
        <label>Name</label>
        </div>
        <div className="Name col-auto">
        <input type="text" name="user_name" />
      </div>

      <div className="email col-auto">
        <label>Email</label>
      </div>
      <div className="email col-auto">
        <input type="email" name="user_email" />
      </div>

      <div className="message col-auto">
        <label>Message</label>
      </div>
      <div className="email col-auto">
        <textarea name="message" />
      </div>

        <div className="submit col-auto">
        <button className="button" type="submit" value="Send">send</button>
      </div>

    </form>
);
  }