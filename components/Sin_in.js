import React from "react";
import SinIn from "../styles/SinIn.module.css";

function Sin_in() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://hyper10.net/api/contact-us", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <form className={SinIn.container} onSubmit={handleSubmit}>
      <h1>Get in touch</h1>
      <div className={SinIn.email + " block"}>
        <label htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className={SinIn.phone + " block"}>
        <label htmlFor="frm-phone">Phone</label>
        <input
          id="frm-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className={SinIn.name + " block"}>
        <div>
          <label htmlFor="frm-first">Name</label>
          <input
            id="frm-first"
            type="text"
            name="name"
            autoComplete="given-name"
            required
          />
        </div>
      </div>
      <div className={SinIn.message + " block"}>
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" rows="7" name="message"></textarea>
      </div>
      <div className={SinIn.button + " block"}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Sin_in;
