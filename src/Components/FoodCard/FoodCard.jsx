import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch,] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
    //  send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added to your cart.`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page.
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="w-full sm:w-80 md:w-2/2 lg:w-3/3 xl:w-4/4 pb-6 bg-base-200 text-center mb-10 rounded-xl m-4 mx-auto">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover rounded-t-xl"
          src={image}
          alt={name}
        />
        <p className="absolute right-0 top-0 bg-black text-white px-2 py-1 rounded-bl-lg">
          $ {price}
        </p>
      </div>

      {/* Text section */}
      <div className="my-3 px-4">
        <h3 className="text-xl md:text-2xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm md:text-base">{recipe}</p>
      </div>

      {/* Button */}
      <button
        onClick={handleAddToCart}
        className="uppercase btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl my-3"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
