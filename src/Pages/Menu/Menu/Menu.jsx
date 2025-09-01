import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from'../../../assets/menu/banner3.jpg'
import PopularMenu from "../../../Components/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'OUR MENU'}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title={'OUR MENU'}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title={'OUR MENU'}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
