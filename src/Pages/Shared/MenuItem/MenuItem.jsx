const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-12 p-4 border rounded-lg">
      {/* Image */}
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[120px] md:w-[150px] lg:w-[180px]"
        src={image}
        alt=""
      />

      {/* Text section */}
      <div className="text-center md:text-left flex-1">
        <h3 className="uppercase font-semibold text-lg">Name: {name}</h3>
        <p className="text-gray-600">Recipe: {recipe}</p>
      </div>

      {/* Price */}
      <p className="text-yellow-500 font-bold text-lg md:text-xl">
        Price: {price}
      </p>
    </div>
  );
};

export default MenuItem;
