import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import pic1 from '../assets/images/szczep/s1.jpg';
import pic2 from '../assets/images/sar/b3.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div >
      <div id="main">
        <div className="inner">
          <section className="tiles">
            <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
              <Link to="Images1">
                <div className="content">
                  <p>
                    Dom jednorodzinny z charakterem.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
              <Link to="Images2">
                <div className="content">
                  <p>
                    Przytulne mieszkanie.
                  </p>
                </div>
              </Link>
            </article>
          </section>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
