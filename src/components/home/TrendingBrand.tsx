import Container from "../layout/Container";
import ProductCard from "../ui/ProductCard";
import { motion } from "framer-motion";

const TrendingBrand = () => {
  const products = [
    { id: 1, title: "Chanel", image: "/images/img1.svg" },
    { id: 2, title: "Louis Vuitton", image: "/images/img2.svg" },
    { id: 3, title: "Prada", image: "/images/img3.svg" },
    { id: 4, title: "Hermes", image: "/images/img4.svg" },
    { id: 5, title: "Puma", image: "/images/img5.svg" },
    { id: 6, title: "Gucci", image: "/images/img6.svg" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <div className="mb-20">
        <motion.div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="text-2xl font-medium text-primary"
          >
            Trending Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="underline"
          >
            View All
          </motion.p>
        </motion.div>

        <div className="my-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {/* Brand cards */}
            {products.map((product) => (
              <motion.div key={product.id} variants={item}>
                <ProductCard img={product.image} title={product.title} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default TrendingBrand;
