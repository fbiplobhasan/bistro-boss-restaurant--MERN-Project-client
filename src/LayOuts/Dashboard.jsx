import React, { useState } from "react";
import { FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { MdImportContacts } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { RiMenuSearchFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
  return (
    <div className="flex">
      {/* dashboar side bar */}
      <div className="w-64 min-h-full bg-orange-300">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/">
              <FaHome></FaHome>
              ADMIN HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaUtensils />
              ADD ITEMS
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaList />
              MANAGE ITEMS
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/">
              <PiUsersFourFill />
              ALL USERS
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              MY CART ({cart.length})
            </NavLink>
          </li>
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
