import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ title, items, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn ml-4 btn-outline border-0 border-b-4 rounded-xl">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
