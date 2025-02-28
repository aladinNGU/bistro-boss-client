import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-4 space-x-2"> 
      <img style={{borderRadius:"0 220px 220px 220px"}}className="w-[120px]"src={image} alt="" />
      <div>
        <h3 className="uppercase">{name} -------------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
