import React from "react";
import { useMediaQuery } from "react-responsive";

const ProductCard = ({ imageUrl, title, price, onAddToCart }) => {
  return (
    <div className="flex flex-col px-5 pt-5 pb-5 mx-[20px] bg-white shadow-2xl max-w-[380px] max-h-[500px] rounded-[30px]">
      <img src={imageUrl} alt={title} className="shrink-0 rounded-3xl bg-zinc-300 h-[282px]" />
      <div className="flex gap-0.5 items-start mt-10">
        <div className="flex flex-col grow shrink- self-start basis-0 w-fit">
          <h2 className="text-base text-black">{title}</h2>
          <div className="flex gap-8 mt-7 font-bold">
            <p className="my-auto text-2xl text-black">Rs.{price}</p>
            <button
              onClick={onAddToCart}
              className="flex gap-1.0 px-2.5 py-1.5 text-sm text-white rounded-xl bg-neutral-700"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20da946bd58526d190052f874a3f98dcc8106b31f9cfef97cd2fdf5721a63f2b?apiKey=980db322e33a4a39a5052caa449e1da6&"
                alt=""
                className="shrink-0 aspect-[0.79] w-[15px]"
              />
              <span className="flex-auto my-auto">ADD TO CART</span>
            </button>
          </div>
        </div>
        <div className="self-end mt-11">
          <button className="flex justify-center items-center px-0.5 rounded-full bg-zinc-300 h-[35px] w-[35px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3953c11395d39a267a119923443e4f991c370c2e178305152ef11e99f79d659?apiKey=980db322e33a4a39a5052caa449e1da6&"
              alt="AR View"
              className="aspect-square w-[31px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const productData = {
    imageUrl: "path/to/product-image.jpg",
    title: "SAVYA HOME Apollo HBCB Mesh Office Executive Chair",
    price: "8000",
  };

  const handleAddToCart = () => {
    // Add to cart logic here
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });

  let gridCols = "grid-cols-4";
  if (isMobile) {
    gridCols = "grid-cols-1";
  } else if (isTablet) {
    gridCols = "grid-cols-2";
  }

  return (
    <div className={`grid ${gridCols} gap-4`}>
      <ProductCard
        imageUrl={productData.imageUrl}
        title={productData.title}
        price={productData.price}
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        imageUrl={productData.imageUrl}
        title={productData.title}
        price={productData.price}
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        imageUrl={productData.imageUrl}
        title={productData.title}
        price={productData.price}
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        imageUrl={productData.imageUrl}
        title={productData.title}
        price={productData.price}
        onAddToCart={handleAddToCart}
      />
        <ProductCard
        imageUrl={productData.imageUrl}
        title={productData.title}
        price={productData.price}
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        imageUrl={productData.imageUrl}
        title={productData.title}
        price={productData.price}
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        imageUrl={productData.imageUrl}
        title={productData.title}
        price={productData.price}
        onAddToCart={handleAddToCart}
      />
        <ProductCard
        imageUrl={productData.imageUrl}
        title={productData.title}
        price={productData.price}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductList;
