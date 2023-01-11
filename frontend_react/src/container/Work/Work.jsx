import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../Wrapper";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Work.scss";

function Work() {
  const handleWorkFilter = (item) => {};
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "ReactJs", "All"].map(
          (item, index) => (
            <div
              key={item}
              onClick={() => handleWorkFilter(item)}
              className={`app_work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name}></img>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Work;
