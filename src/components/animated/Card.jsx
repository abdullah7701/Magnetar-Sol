import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { COURSE_CATEGORIES_LOGOS } from 'constants/courses';
import PropTypes from 'prop-types';

const Card = ({ title, desc, category, isSelected, onClick, index }) => {
  const iconImage = isSelected
    ? COURSE_CATEGORIES_LOGOS[category].selectedCanvas
    : COURSE_CATEGORIES_LOGOS[category].normalCanvas;

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px', threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      x: 50, 
      y: index % 2 === 0 ? -30 : 30  
    },
    visible: {
      opacity: 1,
      x: 0,
      y: index === 0 ? 20 : index === 1 ? -20 : index === 2 ? 20 : 40, 
      transition: {
        delay: index * 0.1, 
        duration: 0.6,
        type: 'spring',
        stiffness: 50,
      },
    },
    exit: { 
      opacity: 0, 
      x: 50, 
      y: index === 0 ? 20 : index === 1 ? -20 : index === 2 ? 20 : 40, 
      transition: { 
        duration: 0.3 
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`w-[262px] h-[400px] rounded-2xl shadow-lg cursor-pointer
        bg-white bg-opacity-20 backdrop-blur-lg border border-white/20
        ${isSelected ? 'bg-blue-700 text-white' : 'text-gray-800'} 
        transition-colors duration-300`}
      onClick={onClick}
      initial="hidden"
      animate={controls}
      variants={variants}
      exit="exit"
      whileHover={{ scale: 1.05 }}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
    >
      <div className="w-full h-full flex flex-col justify-between p-8 pl-6">
        <img 
          src={iconImage} 
          alt={`${category} icon`} 
          className="w-24 h-24 mb-1"
        />
        <h2 className="text-2xl font-bold my-1 text-left">
          {title}
        </h2>
        <p className="text-left text-sm">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
