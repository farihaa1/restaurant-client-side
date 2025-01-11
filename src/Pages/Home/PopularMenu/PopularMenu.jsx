import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Sectiontitle";
import MenuItem from "../../../Components/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-8 my-12">
        {" "}
        {menu.map((item) => (
          <MenuItem
            key={item._id}
            className="flex gap-5"
            item={item}
          ></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
