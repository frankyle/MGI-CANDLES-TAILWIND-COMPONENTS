import React from 'react';
import LeftHero from './LeftHero';
import RightHero from './RightHero';

function HeroMain() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-200 rounded-xl shadow-md">
      <div>
        <LeftHero />
      </div>
      <div>
        <RightHero />
      </div>
    </div>
  );
}

export default HeroMain;
