import axios from "axios";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get("fakeApi.json"); // api call
      setProducts([...data]);
    };
    getAllProducts();
  }, []);
  console.log(products.slice(0, 6));
  return (
    <div className="w-[90%] h-auto mx-auto flex gap-[20%] mt-5">
      <div className="w-[30%]">
        <h1 className="text-[96px] font-light text-black">
          We picked some
          <span className="font-bold text-[#FFAE5D]">cool things</span> for you!
        </h1>
      </div>
      <div className="w-[60%]">
        <h3 className="text-[24px] text-black font-semibold border-b-2 py-[10px] px-[20px] border-dashed border-[#FFAE5D]">
          hot deals for you
        </h3>
        <div className=" grid grid-cols-3 grid-rows-2 gap-5">
          {products &&
            products.slice(0, 6).map((product, index) => (
              <div key={index} className="flex flex-col justify-center">
                <div className="w-[235px] h-[235px]">
                  <img
                    className="w-full h-full object-contain object-center"
                    src={product.picture}
                    alt="picture"
                  />
                </div>
                <h4>{product.name}</h4>
                <div className="flex justify-between items-center">
                  <h4>{`₹${product.price}`}</h4>
                  <h4 className="text-[#FF3232]">{`-${product.discount}%`}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
