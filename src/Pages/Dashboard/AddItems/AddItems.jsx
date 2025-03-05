import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading="Add an Item"
          subHeading="What's new?"
        ></SectionTitle>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div>
            <label className="label">
              <span>Recipe Name</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", {required: true})}
              className="input input-bordered w-full"
            />
          </div>
          {/* category */}
          <div className="flex items-center w-full gap-4">
            <div className="w-6/12">
              <label className="label">
                <span>Category</span>
              </label>
              <select
                {...register("category" , {required: true})}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="w-6/12">
              <label className="label">
                <span>Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price" , {required: true})}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", {required: true})}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input type="file" {...register("image", {required: true})} className="file-input" />
          </div>
          <div className="text-center mt-2">
            <button className="btn btn-neutral">
              Add Item <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
