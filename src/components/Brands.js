import React from 'react';
import { brands } from '../data';

const Brands = () => {
  return (
    <section className="max-h-[145px] bg-tertiary flex items-center">
      <div className="container mx-auto flex items-center justify-evenly flex-wrap md:justify-between">
        {brands.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img} alt="brand name" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
