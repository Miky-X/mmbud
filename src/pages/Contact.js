import React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

const Contact = () => (
  <div>
    <Layout>
      <Sidebar />
      <div id="falafel">
        <div className="inner">
          <ContactForm />
        </div>
      </div>
    </Layout>
  </div>
);

export default Contact;