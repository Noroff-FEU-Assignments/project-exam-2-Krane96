import axios from "axios";
import { HOTELS_URL } from "../../../utils/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createHotelSchema } from "../../../utils/yupSchema";


const CreateForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createHotelSchema),
  });

  const onCreateHotel = async (data) => {
    const options = {
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
        address: data.address,
        image_url: data.image_url,
        stars: data.stars,
      },
    };
    const responseData = await axios.post(HOTELS_URL, options);
    console.log(responseData);
    alert("Hotel Created!");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onCreateHotel)} className="form_basic">
        <h2 style={{ marginBottom: ".5rem" }}>Create Hotel</h2>
        <fieldset>
          <input
            {...register("name")}
            placeholder="Hotel Name"
            className="form-info block hidden"
          />
           {errors.name && (
            <span className="form-error">{errors.name.message}</span>
          )}
          <input
            {...register("price")}
            placeholder="price"
            className="form-info block"
          />
           {errors.price && (
            <span className="form-error">{errors.price.message}</span>
          )}

          <input
            placeholder="address"
            {...register("address")}
            className="form-info"
          />
             {errors.address && (
            <span className="form-error">{errors.address.message}</span>
          )}
          <input
            placeholder="image_url"
            {...register("image_url")}
            className="form-info"
          />
 {errors.image_url && (
            <span className="form-error">{errors.image_url.message}</span>
          )}
          <textarea
            placeholder="description"
            {...register("description")}
            className="form-info "
          />
           {errors.description && (
            <span className="form-error">{errors.description.message}</span>
          )}

          <button className="Btn">Create</button>
        </fieldset>
      </form>
    </>
  );
};

export default CreateForm;
