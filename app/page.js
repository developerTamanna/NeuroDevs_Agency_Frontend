import AboutUs from './components/sections/AboutUs';
import Achievements from './components/sections/Achievements';
import Banner from './components/sections/Banner';
import EvaluateProject from './components/sections/EvaluateProject';
import LogoCarousel from './components/sections/LogoCarousel';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import WhatWeProvide from './components/sections/WhatWeProvide';

export default function Home() {
  return (
    <div>
      <Banner />
      <LogoCarousel />
      <Achievements />
      <AboutUs />
      <Services />
      <Team />
      <WhatWeProvide />
      <EvaluateProject />
    </div>
  );
}
