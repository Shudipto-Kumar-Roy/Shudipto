import React, { useEffect, useState } from "react";
import axios from "axios";
import a from "../images/a.png";
import b from "../images/b.png";
import c from "../images/c.png";
import d from "../images/d.png";
import e from "../images/e.png";
import f from "../images/f.png";

const TopProduct = () => {
  const [products, setProducts] = useState([]);
  const images = [a, b, c, d, e, f];

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get("fakeApi.json"); // api call
      setProducts([...data]);
    };
    getAllProducts();
  }, []);
  return (
    <div className="w-[90%] h-auto mx-auto">
      <div className="py-[100px]">
        <h3 className="text-[24px] text-black font-semibold border-b-2 py-[10px] px-[20px] border-dashed border-[#FFAE5D] mb-10">
          Today's hot deals
        </h3>
        <div className=" grid grid-cols-5 grid-rows-1 gap-10">
          {products &&
            products.slice(6, 11).map((product, index) => (
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
      <div className="pb-[100px] mx-auto">
        <h3 className="text-[24px] text-black font-semibold border-b-2 py-[10px] px-[20px] border-dashed border-[#FFAE5D] mb-10">
          Your searched items
        </h3>
        <div className=" grid grid-cols-6 grid-rows-1 gap-10">
          {images &&
            images.map((image, index) => (
              <div key={index} className="flex flex-col justify-center">
                <div className="w-[235px] h-[235px]">
                  <img
                    className="w-full h-full object-contain object-center"
                    src={image}
                    alt="picture"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
