function Header() {
  return (
    <div className="w-full h-[130px] bg-zinc-400 text-white ">
      <div className="topbar w-full h-10 sm:h-12 bg-[#9ea18e] text-center flex items-center justify-center ">
        <p className="sm:text-xs">
          We ship nationwide. 30-day return policy. Free standard shipping on
          orders over $75.
        </p>
      </div>
      <div className="mainheader w-full h-24 bg-white text-black flex items-center justify-between lg:px-24 sm:px-10  headers">
        <img
          className="lg:w-32 sm:w-24 cursor-pointer"
          src="./logo.jpg"
          alt="Logo"
        />
        <ul className="flex items-center justify-between lg:gap-8 sm:gap-5">
          <li>
            <a className="lg:text-base hover:text-amber-600 sm:text-sm" href="">
              Home
            </a>
          </li>
          <li>
            <a className="lg:text-base hover:text-amber-600 sm:text-sm" href="">
              About Us
            </a>
          </li>
          <li>
            <a className="lg:text-base hover:text-amber-600 sm:text-sm" href="">
              Shop
            </a>
          </li>
          <li>
            <a className="lg:text-base hover:text-amber-600 sm:text-sm" href="">
              All Products
            </a>
          </li>
          <li>
            <a className="lg:text-base hover:text-amber-600 sm:text-sm" href="">
              Blog
            </a>
          </li>
          <li>
            <a className="lg:text-base hover:text-amber-600 sm:text-sm" href="">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="btn-header-icons flex gap-3">
          <i className="ri-search-line text-lg"></i>
          <i className="ri-user-line text-lg"></i>
          <i className="ri-shopping-bag-line text-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
