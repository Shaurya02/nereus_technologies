import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-transparent pt-2">
      <div className="flex justify-between items-center mx-auto px-4 md:px-0">
        <a href="#hero"><img src='./Hero/logomark-white.png' className="mt-4 ml-8 h-10 w-10 logo" alt="Logo"></img></a>
        <div className='flex pb-4 md:pb-0 md:flex md:justify-end md:flex-row'>
          <a href="#solutions" className="mt-8 px-8 text-sm text-white text-sm lg:mr-8">Solutions</a>
          <a href="#FAQ" className="mt-8 px-8 text-sm text-white text-sm lg:mr-8">FAQ</a>
          <a href="#ContactUs" className="px-4 mt-6 py-2 ml-4 mr-8 text-sm font-semibold text-white border-white rounded-3xl border">Get in touch</a>
        </div>
      </div>
    </nav>
  );
};
