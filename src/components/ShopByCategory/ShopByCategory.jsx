import "./ShopByCategory.css";
function ShopByCategory() {
  return (
    <>
      <div className="w-full h-[70vh] mx-auto shopbycategory">
        <h2 className="text-2xl font-semibold">Shop By Category</h2>
        <div className="py-10 flex items-center justify-between">
          <div className="products text-center">
            <img
              className="rounded-md w-56"
              src="./product1.jpg"
              alt="products1"
            />
            <h3 className="py-4 font-medium">Architecture Art</h3>
            <a className="hover:text-amber-600" href="#">
              View Now
            </a>
          </div>
          <div className="products text-center">
            <img
              className="rounded-md w-56"
              src="./product1.jpg"
              alt="products1"
            />
            <h3 className="py-4 font-medium">Architecture Art</h3>
            <a className="hover:text-amber-600" href="#">
              View Now
            </a>
          </div>
          <div className="products text-center">
            <img
              className="rounded-md w-56"
              src="./product1.jpg"
              alt="products1"
            />
            <h3 className="py-4 font-medium">Architecture Art</h3>
            <a className="hover:text-amber-600" href="#">
              View Now
            </a>
          </div>
          <div className="products text-center">
            <img
              className="rounded-md w-56"
              src="./product1.jpg"
              alt="products1"
            />
            <h3 className="py-4 font-medium">Architecture Art</h3>
            <a className="hover:text-amber-600" href="#">
              View Now
            </a>
          </div>
          <div className="products text-center">
            <img
              className="rounded-md w-56"
              src="./product1.jpg"
              alt="products1"
            />
            <h3 className="py-4 font-medium">Architecture Art</h3>
            <a className="hover:text-amber-600" href="#">
              View Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopByCategory;
