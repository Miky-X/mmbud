import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Gallery from '../components/Gallery';

const img_set_1 = [
  {
    src: require('../assets/images/sar/b1.jpg'),
    thumbnail: require('../assets/images/sar/b1.jpg'),
    title: '01',
    desc: 'Przytulne mieszkanie',
    full: true,
  },
  {
    src: require('../assets/images/sar/b2.jpg'),
    thumbnail: require('../assets/images/sar/b2.jpg'),
    title: '02',
    desc: 'Przytulne mieszkanie',
  },
  {
    src: require('../assets/images/sar/b3.jpg'),
    thumbnail: require('../assets/images/sar/b3.jpg'),
    title: '03',
    desc: 'Przytulne mieszkanie',
  },
  {
    src: require('../assets/images/sar/b4.jpg'),
    thumbnail: require('../assets/images/sar/b4.jpg'),
    title: '04',
    desc: 'Przytulne mieszkanie',
  },
  {
    src: require('../assets/images/sar/b6.jpg'),
    thumbnail: require('../assets/images/sar/b6.jpg'),
    title: '05',
    desc: 'Przytulne mieszkanie',
  },
  {
    src: require('../assets/images/sar/b5.jpg'),
    thumbnail: require('../assets/images/sar/b5.jpg'),
    title: '06',
    desc: 'Przytulne mieszkanie',
    full: true,
  },
  {
    src: require('../assets/images/sar/b7.jpg'),
    thumbnail: require('../assets/images/sar/b7.jpg'),
    title: '07',
    desc: 'Przytulne mieszkanie',
  },
  {
    src: require('../assets/images/sar/b8.jpg'),
    thumbnail: require('../assets/images/sar/b8.jpg'),
    title: '08',
    desc: 'Przytulne mieszkanie',
  },
  {
    src: require('../assets/images/sar/b9.jpg'),
    thumbnail: require('../assets/images/sar/b9.jpg'),
    title: '09',
    desc: 'Przytulne mieszkanie',
    full: true,
  },
];
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="content">
      <div className="gallery">
        <Gallery images={img_set_1} />
      </div>
    </div>
  </Layout>
);

export default IndexPage;