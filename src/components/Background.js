import React from 'react';

import SlideShow from './SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/bg01.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const Bacground = () => (

    <SlideShow settings={settings} />

);

export default Bacground;
