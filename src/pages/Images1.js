import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Gallery from '../components/Gallery';

const img_set_1 = [
  {
    src: require('../assets/images/szczep/s1.jpg'),
    thumbnail: require('../assets/images/szczep/s1.jpg'),
    title: '01',
    desc: 'Dom jednorodzinny z charakterem',
    full: true,
  },
  {
    src: require('../assets/images/szczep/s2.jpg'),
    thumbnail: require('../assets/images/szczep/s2.jpg'),
    title: '02',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s3.jpg'),
    thumbnail: require('../assets/images/szczep/s3.jpg'),
    title: '03',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s4.jpg'),
    thumbnail: require('../assets/images/szczep/s4.jpg'),
    title: '04',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s5.jpg'),
    thumbnail: require('../assets/images/szczep/s5.jpg'),
    title: '05',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s6.jpg'),
    thumbnail: require('../assets/images/szczep/s6.jpg'),
    title: '06',
    desc: 'Dom jednorodzinny z charakterem',
    full: true,
  },
  {
    src: require('../assets/images/szczep/s7.jpg'),
    thumbnail: require('../assets/images/szczep/s7.jpg'),
    title: '07',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s8.jpg'),
    thumbnail: require('../assets/images/szczep/s8.jpg'),
    title: '08',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s9.jpg'),
    thumbnail: require('../assets/images/szczep/s9.jpg'),
    title: '09',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s10.jpg'),
    thumbnail: require('../assets/images/szczep/s10.jpg'),
    title: '10',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s11.jpg'),
    thumbnail: require('../assets/images/szczep/s11.jpg'),
    title: '11',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s12.jpg'),
    thumbnail: require('../assets/images/szczep/s12.jpg'),
    title: '12',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s13.jpg'),
    thumbnail: require('../assets/images/szczep/s13.jpg'),
    title: '13',
    desc: 'Dom jednorodzinny z charakterem',
    full: true,
  },
  {
    src: require('../assets/images/szczep/s14.jpg'),
    thumbnail: require('../assets/images/szczep/s14.jpg'),
    title: '14',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s15.jpg'),
    thumbnail: require('../assets/images/szczep/s15.jpg'),
    title: '15',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s16.jpg'),
    thumbnail: require('../assets/images/szczep/s16.jpg'),
    title: '16',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s17.jpg'),
    thumbnail: require('../assets/images/szczep/s17.jpg'),
    title: '17',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s18.jpg'),
    thumbnail: require('../assets/images/szczep/s18.jpg'),
    title: '18',
    desc: 'Dom jednorodzinny z charakterem',
    full: true,
  },
  {
    src: require('../assets/images/szczep/s19.jpg'),
    thumbnail: require('../assets/images/szczep/s19.jpg'),
    title: '19',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s20.jpg'),
    thumbnail: require('../assets/images/szczep/s20.jpg'),
    title: '20',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s21.jpg'),
    thumbnail: require('../assets/images/szczep/s21.jpg'),
    title: '21',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s22.jpg'),
    thumbnail: require('../assets/images/szczep/s22.jpg'),
    title: '22',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s23.jpg'),
    thumbnail: require('../assets/images/szczep/s23.jpg'),
    title: '23',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s24.jpg'),
    thumbnail: require('../assets/images/szczep/s24.jpg'),
    title: '24',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s25.jpg'),
    thumbnail: require('../assets/images/szczep/s25.jpg'),
    title: '25',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s26.jpg'),
    thumbnail: require('../assets/images/szczep/s26.jpg'),
    title: '26',
    desc: 'Dom jednorodzinny z charakterem',
  },
  {
    src: require('../assets/images/szczep/s27.jpg'),
    thumbnail: require('../assets/images/szczep/s27.jpg'),
    title: '27',
    desc: 'Dom jednorodzinny z charakterem',
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