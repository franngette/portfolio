import React from "react";
import { motion } from "framer-motion";
import './Presentation.scss';
import PresAnimation from "./PresAnimation/PresAnimation";

const Presentation = () => {
  return (
    <div className="pres">
      <motion.div className="pres__container" >
        <motion.h1 className="pres__container__title" animate={{ translateX: 100, opacity: 1 }} transition={{ duration: 2 }} initial={{ x: -100 }}>
          Hi there, I'm Francis.
        </motion.h1>
        <motion.h1 className="pres__container__description" animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2 }}>
          Frontend Developer.
        </motion.h1>
        <motion.h1 className="pres__container__description" animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>
          Translating ideas into code.
        </motion.h1>
      </motion.div>
      <div className="pres__img">
        <img src='./images/me.jpg' alt='Francis Gette' className="pres__img--framed" />
      </div>

      <PresAnimation />
    </div>
  );
};

export default Presentation;
