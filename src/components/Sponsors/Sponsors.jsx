import React from 'react';
import pugarch from '../../assets/pugarch.jpg';
import ipapo_logo from '../../assets/ipapo_logo.png';
import Commenzy_black_logo from '../../assets/Commenzy_black_logo.png';
import sipna from '../../assets/sipna_logo.png';

function Sponsors() {
  const sponsors = [
    pugarch, ipapo_logo, Commenzy_black_logo, sipna,
    pugarch, ipapo_logo, Commenzy_black_logo, sipna
  ];

  return (
    <div className="overflow-hidden relative w-full">
      <div className="bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-center text-gray-400 mb-8">
            Proudly Sponsored By
          </p>

          {/* Scrolling Container */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-8 animate-scroll whitespace-nowrap">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <img
                  key={index}
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="h-16 object-contain min-w-fit hover:grayscale-0 transition-all"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
