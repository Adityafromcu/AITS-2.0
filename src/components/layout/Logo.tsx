import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      {/* Chandigarh University Logo (First) */}
      <div className="flex items-center gap-4">
        <img 
          src="https://www.cuchd.in/about/assets/images/cu-logo.png" 
          alt="Chandigarh University Logo" 
          className="h-12"
        />
        <img 
          src="https://www.bfcet.com/wp-content/uploads/2024/03/A-plus-logo-jpeg.webp" 
          alt="NAAC A+ Grade" 
          className="h-12"
        />
      </div>
      
      <div className="h-8 w-px bg-gray-600 mx-2" />
      
      {/* IEEE Logos */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png" 
        alt="IEEE Logo" 
        className="h-12"
      />
      <img 
        src="comsoc.png" 
        alt="IEEE ComSoc Logo" 
        className="h-10"
      />
    </div>
  );
};