import React from 'react';

import { social } from '../data';

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            key={index}
            className="flex items-center justify-center text-accent hover:scale-125 ease-in duration-500">
            <a href={item.href} className="text-base">
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
