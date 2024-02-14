import React, { useEffect, useLayoutEffect } from "react";
import "./Home.scss";
import { HeaderSlider, ProductList, Loader } from "../../";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../app/categorySlice";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../../app/productSlice";
import { STATUS } from "../../utils/status";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, [dispatch]);

  const products = useSelector(getAllProducts);
  
  const productsStatus = useSelector(getAllProductsStatus);
  console.log(products);

  return (
    <div>
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>See our products</h3>
              </div>
              <div className="">
                {productsStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={products}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
