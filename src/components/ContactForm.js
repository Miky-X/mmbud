import React from 'react';
export default function ContactForm() {
  return (
    <section>
      <h2>Skontaktuj się z nami</h2>
      <form method="post" action="post" data-netlify="true">
        <div className="fields">
          <div className="field half">
            <input type="name" name="name" id="name" placeholder="Imię" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>
          <div className="field">
            <textarea name="message" id="message" placeholder="Wiadomość" />
          </div>
          <div data-netlify-recaptcha="true"></div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send" className="primary" />
         </li>
        </ul>
      </form>
   </section>
  );
}