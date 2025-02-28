import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white mb-12 pt-4">
      <SectionTitle
        heading="featured item"
        subHeading="check it out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2025</p>
          <h3 className="uppercase">Where I can get Some?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            minus unde, corrupti, commodi consequuntur facilis velit corporis
            magnam iusto iure nostrum, incidunt porro vero quisquam autem! Sit
            unde quisquam necessitatibus, dolorem laudantium fugit enim
            molestiae ratione debitis earum reprehenderit magnam culpa sequi
            deserunt praesentium voluptas ipsum? Consequatur ad quibusdam
            voluptates?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-2">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
