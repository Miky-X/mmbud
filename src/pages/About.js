import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/img/About.png';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic1} alt="" />
            </span>
        <div className="text">
          <p>
            Jesteśmy firmą budowlaną z Poznania, która przez ostatnie lata solidnej pracy zjednała sobie rzesze zadowolonych klientów i usatysfakcjonowanych partnerów biznesowych.
          </p>
          <p>
            Tworzymy przedsiębiorstwo, które łączy sprawdzone metody budowlane z osiągnięciami nowoczesnej techniki. Podejmujemy się każdego nowego projektu, w którym możemy wykorzystać nasze wysokie umiejętności i duże doświadczenie w budownictwie.
          </p>
          <p>
            Wykonujemy usługi, remontowe, a także usługi osuszania budynków. Firma budowlana z naszą wiedzą i pasją do projektowania wnętrz i architektury, oraz znajomością mechanizmów rynku, to gwarancja, że ominą Państwa wszystkie zmartwienia związane z planowanym remontem.
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;
