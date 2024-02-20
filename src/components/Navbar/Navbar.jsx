import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarOn, getSidebarStatus } from "../../app/sidebarSlice";
import { fetchAsyncCategories, getAllCategories } from "../../app/categorySlice";
import { useEffect } from "react";
import { getAllCarts, getCartItemCount, getCartTotal } from "../../app/cartSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  // const sidebarStatus = useSelector(getSidebarStatus)
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts)
  const itemsCount = useSelector(getCartItemCount)

  // console.log(itemsCount);

  useEffect(() => {
    dispatch(fetchAsyncCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCartTotal())
  }, [carts])

  // console.log(categories);

  return (
    <nav className="navbar">
      <div className="navbar-cnt flex align-center">
        <div className="brand-and-toggler flex align-center">
          <button
            type="button"
            className="sidebar-show-btn text-white"
            onClick={() => dispatch(setSidebarOn())}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/" className="navbar-brand flex align-center">
            <span className="navbar-brand-ico">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className="navbar-brand-txt mx-2">
              <span className="fw-7">Snap</span>Up.
            </span>
          </Link>
        </div>

        <div className="navbar-collapse w-100">
          <div className="navbar-search bg-white">
            <div className="flex align-center">
              <input
                type="text"
                className="form-control fs-14"
                placeholder="Search your preferred items here"
              />
              <Link
                to=""
                className="text-white search-btn flex align-center justify-center"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>

          <ul className="navbar-nav flex align-center fs-12 fw-4 font-manrope">
            {categories.slice(0, 8).map((category, idx) => (
              <li className="nav-item no-wrap" key={idx}>
                <Link to={`category/${category}`} className="nav-link text-capitalize">
                  {category }
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-cart flex align-center">
          <Link to="/cart" className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-items-value">{itemsCount}</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
