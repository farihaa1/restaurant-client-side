import React from 'react';

const MenuItem = ({item}) => {
    return (
        <div className="flex gap-5" item={item}>
            <img className="w-28 object-cover h-28" style={{borderRadius: "0 200px 200px 200px"}} src={item.image} alt="" />
            <div>
              <h3 className="text-3xl font-semibold text-gray-600">
                {item.name}----------
              </h3>
              <p className="text-base text-gray-500">{item.recipe}</p>
            </div>
            <p className="text-orange-400">${item.price}</p>
          </div>
    );
};

export default MenuItem;