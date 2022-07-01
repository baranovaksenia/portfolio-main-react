import React from 'react';
//import navigation data
import { navigation } from '../data';

//import Link
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li key={index} className="text-white hover:text-green-400 cursor-pointer">
              <Link to={item.href} className="transition-all duration-300">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
