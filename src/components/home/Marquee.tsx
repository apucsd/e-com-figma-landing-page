import { motion } from "framer-motion";

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -10035], // Start from off-screen right to off-screen left
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Adjust duration based on text length
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex items-center whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="text-[180px] mx-10 marquee-text">
          Huge Discounts on Beauty Products! Trendy Clothing for All Seasons!
          Stylish Shoes at Unbeatable Prices! Limited-Time Offers on
          Accessories! Summer Sale: Up to 70% Off
        </h1>
      </motion.div>
    </div>
  );
};

export default Marquee;
