import { ANIMATIONS } from "constants/animations";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Animation = ({
  className = "",
  animation = ANIMATIONS.fadeInUp,
  delay = 0.15,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
