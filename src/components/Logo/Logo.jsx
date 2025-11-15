import React from 'react';
import logo from "../../assets/logo.png"

const Logo = () => {
  return (
    <div className='flex items-end'>
      <img src={logo} alt="" />
      <span className="text-3xl font-bold -ms-2.5 -mb-1">ZapShift</span>
    </div>
  );
};

export default Logo;