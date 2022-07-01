import React, { useState, useEffect } from 'react';

// import data
import { projectsData } from '../data';
import { projectsNav } from '../data';
import Project from './Project';

const Projects = () => {
  const [active, setActive] = useState(0);
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //get projects depends on name in the item state
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    //console.log(e.target.textContent);
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      {/* Projects navigation */}
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => handleClick(e, index)}
                key={index}
                className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* render projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
