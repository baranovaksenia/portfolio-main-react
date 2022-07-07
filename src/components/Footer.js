import React from 'react';

import Logo from '../assets/img/logo.svg';

import { social } from '../data';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* div for social icons */}
          <div className="flex items-center justify-center space-x-6">
            {' '}
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>

          <div>
            <img src={Logo} alt="logo" />
          </div>
          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; {new Date().getFullYear()} Xenia Oz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
