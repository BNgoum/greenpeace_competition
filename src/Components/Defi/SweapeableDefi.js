import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import DefiUnlock from './DefiUnlock';
import DefiOpen from './DefiOpen';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

const MyComponent = () => (
  <SwipeableViews>
    <DefiOpen />
    <DefiOpen />
    <DefiOpen />
    <DefiOpen />
  </SwipeableViews>
);

export default MyComponent;