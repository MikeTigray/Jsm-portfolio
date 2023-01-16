import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../Wrapper";

import { motion } from "framer-motion";
import "./Testimonial.scss";
function Testimonial() {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  return <div>Testimonial</div>;
}

export default Testimonial;
