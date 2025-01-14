import React from "react";
import MenuItem from "../../../Components/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="py-8">
      {title && <Cover menuImg={coverImg} title={title}></Cover>}
      <div className="grid lg:grid-cols-2 gap-8 my-12">
        {items.map((item) => (
          <MenuItem
            key={item._id}
            className="flex gap-5"
            item={item}
          ></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 my-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
