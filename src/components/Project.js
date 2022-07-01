import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';

const Project = ({ project }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="rounded-2xl" src={project.image} alt="" />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{project.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{project.name}</h3>
      <p className="text-base max-w-md">{project.description}</p>
      <div className="flex items-center justify-between mt-2">
        <a href={project.link}>
          <BiLinkExternal
            size={20}
            className="text-white mr-4  hover:scale-125 ease-in duration-500"
          />
        </a>
        <a href={project.github}>
          <BsCodeSlash size={20} className="text-white hover:scale-125 ease-in duration-500" />
        </a>
      </div>
    </div>
  );
};

export default Project;
