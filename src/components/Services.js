import React from 'react';
//import services data
import { services } from '../data';

const Services = () => {
  return (
    <section className="section bg-tertiary" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ut blanditiis autem
            ducimus necessitatibus, quisquam iusto eos aliquid numquam dignissimos?
          </p>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-8">
          {services.map((item, index) => {
            return (
              <div className="p-6 bg-secondary rounded-2xl" key={index}>
                <div className="text-accent w-12 h-12 rounded-sm flex justify-center items-center mb-24 text-[28px]">
                  {item.icon}
                </div>
                <h4 className="text-xl font-medium  mb-4">{item.name}</h4>
                <p className="text-base">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
