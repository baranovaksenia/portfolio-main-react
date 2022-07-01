import React from 'react';
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary id="about"'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-24 xl:flex-row">
          <img
            src={Image}
            alt=""
            className="object-cover max-w-[565px] h-full md:mx-auto lg:mx-0 rounded-2xl"
          />

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Xenia Oz
              </h2>
              <p className="mb-4 text-accent">Freelance Front End Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore earum dolorum quo
                consequatur rem nihil hic ducimus rerum soluta neque harum velit molestiae
                dignissimos distinctio dolorum nisi labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore cupiditate ratione esse
                maxime eum recusandae ducimus.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
