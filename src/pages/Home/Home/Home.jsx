import React from 'react';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Service3StaticCards from '../Service3StaticCards/Service3StaticCards';

const Home = () => {
  return (
    <div>
      <HowItWorks />
      <OurServices />
      <Brands />
      <Service3StaticCards/>
    </div>
  );
};

export default Home;