import React from 'react';
import { Footer, Navbar } from '../components';

import Hero from '../sections/Hero';
import { About, Categories } from '@/sections';


const Page: React.FC = () => (
  <div>
    <Hero />
    <About />
    <Categories />
    <Footer />
  </div>
);

export default Page;
