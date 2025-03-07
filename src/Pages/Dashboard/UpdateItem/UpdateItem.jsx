import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {name, category, recipe, price, _id} = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      // send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log("with image url", menuRes.data);
      if (menuRes.data.modifiedCount>0) {
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `The ${name} is updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle heading={"Update an Item"} subHeading={'Update'}></SectionTitle>
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Recipe Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                placeholder="Recipe Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            {/* category */}
            <div className="flex items-center w-full gap-4">
              <div className="form-control w-6/12">
                <label className="label">
                  <span>Category</span>
                </label>
                <select
                defaultValue={category}
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
              <div className="form-control w-6/12">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  defaultValue={price}
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
              <textarea
                defaultValue={recipe}
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>
            </div>
            <div className="form-control w-full my-6">
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input"
              />
            </div>
            <div className="text-center mt-2">
              <button className="btn btn-neutral">
                Update Item <FaUtensils></FaUtensils>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
