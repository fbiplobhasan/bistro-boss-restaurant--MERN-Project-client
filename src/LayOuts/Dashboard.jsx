import {
  FaAd,
  FaBook,
  FaCalendar,
  FaCalendarAlt,
  FaHome,
  FaHospitalUser,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdImportContacts, MdOutlinePayments } from "react-icons/md";
import { RiMenuSearchFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { CiBookmarkCheck } from "react-icons/ci";
import { VscPreview } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboar side bar */}
      <div className="w-64 min-h-full bg-orange-300 h-screen">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaCalendar></FaCalendar>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList>
                  Payment Real History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* 2ND PART */}
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/">
              <RiMenuSearchFill />
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/">
              <FaShoppingBag />
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/">
              <MdImportContacts />
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
