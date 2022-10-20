import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zkai9zg', 'template_vs5bb3u', form.current, '4r9FdI6Jp62p5f0Hm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
);
}



{/* <label>Name</label>
<input type="text" name="user_name" />
<label>Email</label>
<input type="email" name="user_email" />
<label>Message</label>
<textarea name="message" />
<input type="submit" value="Send" /> */}