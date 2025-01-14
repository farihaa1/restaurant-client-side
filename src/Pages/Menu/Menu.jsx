import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/images/menu/banner3.jpg";
import desertImg from "../../assets/images/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/images/menu/pizza-bg.jpg";
import soupImg from "../../assets/images/menu/soup-bg.jpg";
import saladImg from "../../assets/images/menu/salad-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/Sectiontitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category == "dessert");
  const soup = menu.filter((item) => item.category == "soup");
  const salad = menu.filter((item) => item.category == "salad");
  const pizza = menu.filter((item) => item.category == "pizza");
  const offered = menu.filter((item) => item.category == "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover menuImg={menuImg} title="Our Menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu items */}
      <MenuCategory
        items={desserts}
        title={"Deserts"}
        coverImg={desertImg}
      ></MenuCategory>
      {/* pizzas menu items */}
      <MenuCategory
        items={pizza}
        title={"Pizzas"}
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* pizzas menu items */}
      <MenuCategory
        items={soup}
        title={"Soups"}
        coverImg={soupImg}
      ></MenuCategory>
      {/* pizzas menu items */}
      <MenuCategory
        items={salad}
        title={"Salads"}
        coverImg={saladImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
