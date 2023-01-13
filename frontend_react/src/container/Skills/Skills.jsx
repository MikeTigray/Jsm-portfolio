import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

import { urlFor, client } from "../../client";
import { AppWrap } from "../../Wrapper";

import { motion } from "framer-motion";
import "./Skills.scss";
function Skills() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const exQuery = '*[_type == "experiences"]';
    const skillQuery = '*[_type == "skills"]';

    client.fetch(exQuery).then((data) => {
      setExperience(data);
    });
    client.fetch(skillQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name}></img>
              </div>
              <p className={skill.name}>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
