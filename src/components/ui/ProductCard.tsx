// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ img, title }: any) => {
  return (
    <div className="overflow-hidden group cursor-pointer">
      <img
        src={`${img ? img : "/images/img1.svg"}`}
        alt=" Logo"
        className="object-cover group-hover:scale-125 duration-500 w-full rounded-md h-full"
      />
      <h3 className="text-md text-center mt-2 font-medium text-gray-600">
        {title ? title : "Brand Name"}
      </h3>
    </div>
  );
};

export default ProductCard;
