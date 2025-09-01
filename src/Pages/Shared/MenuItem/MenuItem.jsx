const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-4 mb-12">
      <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
      <div>
        <h3 className="uppercase">Name: {name}-------</h3>
        <p>Recipe: {recipe}</p>
      </div>
      <p className="text-yellow-500">Price: {price}</p>
    </div>
  );
};

export default MenuItem;
