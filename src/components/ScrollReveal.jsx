import React from 'react';
import { motion } from 'framer-motion';

const defaultVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
});

const ScrollReveal = ({ children, className = '', delay = 0, variant }) => {
  const variants = variant || defaultVariant(delay);
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
