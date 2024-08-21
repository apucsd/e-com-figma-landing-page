import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ clipPath: "inset(0% 0% 0% 100%)", backgroundColor: "white" }}
      animate={{
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
          duration: 2.5,
          ease: [1, 1, 1, 1], // Custom cubic-bezier easing for smoother effect
        },
      }}
      className="relative w-full h-[543px] my-6"
    >
      <img className="w-full h-full" src="/images/banner.png" alt="Banner" />
    </motion.div>
  );
};

export default Banner;
