const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div className="w-full sm:w-80 md:w-2/2 lg:w-3/3 xl:w-4/4 pb-6 bg-base-200 text-center mb-10 rounded-xl m-4 mx-auto">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover rounded-t-xl"
          src={image}
          alt={name}
        />
        <p className="absolute right-0 top-0 bg-black text-white px-2 py-1 rounded-bl-lg">$ {price}</p>
      </div>

      {/* Text section */}
      <div className="my-3 px-4">
        <h3 className="text-xl md:text-2xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm md:text-base">{recipe}</p>
      </div>

      {/* Button */}
      <button className="uppercase btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl my-3">
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
