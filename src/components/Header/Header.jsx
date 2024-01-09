function Header() {
  return (
    <div className="w-full h-[130px] bg-zinc-400 text-white ">
      <div className="topbar w-full h-10 sm:h-12 bg-[#9ea18e] text-center flex items-center justify-center ">
        <p className="sm:text-xs">
          We ship nationwide. 30-day return policy. Free standard shipping on
          orders over $75.
        </p>
      </div>
      <div className="mainheader w-full h-24 bg-white text-black flex items-center justify-between px-24 headers">
        <img className="w-40 sm:w-24" src="./logo.jpg" alt="Logo" />
        <ul className="flex items-center justify-between gap-8 sm:gap-5">
          <li>
            <a className="hover:text-amber-600 sm:text-sm" href="">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-amber-600 sm:text-sm" href="">
              About Us
            </a>
          </li>
          <li>
            <a className="hover:text-amber-600 sm:text-sm" href="">
              Shop
            </a>
          </li>
          <li>
            <a className="hover:text-amber-600 sm:text-sm" href="">
              All Products
            </a>
          </li>
          <li>
            <a className="hover:text-amber-600 sm:text-sm" href="">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-amber-600 sm:text-sm" href="">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="btn-header-icons flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
