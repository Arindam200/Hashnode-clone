import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight;
        if (isInView) {
          mainControls.start("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mainControls]);

  return (
    <motion.div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Reveal;
