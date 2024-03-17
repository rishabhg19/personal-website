import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
  }, []);
  const handleWorkFilter = (item) => 
  {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
        setAnimateCard([{y:0, opacity: 1}]);
        //setFilterWork(works.filter((work) => work.tags.includes(item)));
        if(item === 'All')
        {
          setFilterWork(works);
        }
        else
        {
          setFilterWork(works.filter((work) => work.tags.includes(item)));
        }
    }, 500); 
  };
  return (
    <>
      <h1 className="head-text"> <span> Portfolio + Experience</span><br /> <span></span> </h1>
      <h3 className="sub-text>">Below are some of the highlights among the projects I have worked on for school, for my own learning, and for professional experience. I think <span>project-based learning</span> is one of the best ways, if not <span>the most effective way</span> to become proficient with new technologies.</h3>
      <div className="app__work-filter">
        {['Personal Projects', 'Academic Projects', 'Professional Experience','All'].map((item,index)=>(
          <div
            key= {index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate = {animateCard}
        transition = {{duration: 0.5, delayChildren: 0.5}}
        className = "app__work-portfolio"
      >
        {filterWork.map((work,index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
                <img src = {urlFor(work.imgUrl)} alt = 'app snippet'/>
                <a href={work.projectLink} target= "_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale:[0,1]}}
                    whileHover={{scale: [1,0.9]}}
                    transition={{duration: 0.25}}
                    className="app__flex"
                  >
                  </motion.div>
                </a>
                <a href={work.codeLink} target= "_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale:[0,1]}}
                    whileHover={{scale: [1,0.9]}}
                    transition={{duration: 0.25}}
                    className="app__flex"
                  >
                  </motion.div>
                </a>
            </div>
            <div className="app__work-content app__flex">
                <div>
                <h1 className="bold-text">{work.title}</h1>
                <h4 className="unbold">Technology used - {work.techs}</h4>
                <p className="p-text" style={{float: 'left'}}>{work.description}</p>
                <p className="github">
                    GitHub - 
                    <a href= {work.codeLink} target= "_blank" rel="noreferrer"> {work.codeLink} {'\n'}</a>
                    <img src = {urlFor(work.imgUrl)} alt = 'app snippet'/>
                </p>
                </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work');