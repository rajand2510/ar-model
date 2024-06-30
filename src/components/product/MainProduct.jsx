import * as React from "react";

const ProductImage = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="grow w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full"
    />
  );
}

 const AddToCartButton = () => {
  return (
    <button className="flex gap-1 px-4 py-1.5 mt-7 text-base w-7/12 font-bold text-justify text-white bg-black rounded-3xl">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e55fa33744fd7794ef2a1b0f03402a432c0dd4869c54a3a6f18449249ad8afe?apiKey=980db322e33a4a39a5052caa449e1da6&"
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
      <span className="flex-auto my-auto">ADD TO CART</span>
    </button>
  );
}

 const ProductDetails = ({ title, description, price }) => { 
  return (
    <section className="flex flex-col self-stretch my-auto max-md:mt-10">
      <h1 className="text-3xl font-medium text-justify text-black">{title}</h1>
      <p className="mt-8 text-lg text-black">{description}</p>
      <p className="mt-9 text-3xl font-bold text-justify text-black">{price}</p>
      <AddToCartButton />
      <div className="flex justify-center items-center px-2.5 mt-5 rounded-full bg-zinc-300 h-[67px] w-[67px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76818322c020459bceba6ecfcc5cbe9a4fb051cb7292cb581d6abfdba2ec72cd?apiKey=980db322e33a4a39a5052caa449e1da6&"
          alt=""
          className="w-full aspect-square"
        />
      </div>
    </section>
  );
}

const MainProduct = () => {
  return (
    <article className="px-11 py-8 mt-8 ml-[300px] mt-20 bg-white rounded-3xl shadow-xl max-w-[898px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <ProductImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/54020e4143530d5895338c555361060b7f2984ffaa8687ea92eb279b6b74076e?apiKey=980db322e33a4a39a5052caa449e1da6&"
            alt="Product image"
          />
        </div>
        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <ProductDetails
            title="Title"
            description="Both approaches achieve the same result of adding a row at the top. Choose the method that best suits your project structure"
            price="Rs.7000"
          />
        </div>
      </div>
    </article>
  );
}

export default MainProduct;