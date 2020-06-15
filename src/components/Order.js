import React, { useEffect } from "react";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const nextVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModel }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModel(true);
    }, 5000);
  }, [setShowModel]);
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={nextVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={nextVariants}>
        {pizza.toppings.map((topping) => (
          <motion.div key={topping}>{topping}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
