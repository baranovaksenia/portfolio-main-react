import React, { useState } from 'react';

// import icons
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';

// import navigation data
import { navigation, social } from '../data';

// import components
import Socials from './Socials';

// import framer
import { motion } from 'framer-motion';

// import Link
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  };

  return (
    <nav className="relative">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-[105px]">
          <XIcon className="w-8 h-8" />
        </div>
        {navigation.map((item, idx) => {
          return (
            <li key={idx} className="mb-8">
              <Link
                to={item.href}
                smooth={true}
                spy={true}
                activeClass="active"
                duration={500}
                offset={-70}
                className="transition-all duration-300">
                {item.name}
              </Link>
            </li>
          );
        })}
        <ul className="flex space-x-6">
          {social.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-center text-white hover:scale-125 ease-in duration-500">
                <a href={item.href} className="text-base">
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
