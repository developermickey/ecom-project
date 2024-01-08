import "./ShopThreeCategory.css";
function ShopThreeCategory() {
  return (
    <>
      <div className="w-full flex gap-2 h-[70vh] mx-auto bg-transparents shopthreecategory">
        <div className="bg-[url(./assets/sub-banner-1.jpg)] flex w-1/2 h-[70vh] relative bg-cover bg-bottom rounded-md"></div>

        <div className="flex w-1/2 flex-col gap-2">
          <div className="bg-[url(./assets/sub-banner-2.jpg)] relative bg-cover w-full h-[35vh] rounded-md"></div>
          <div className="bg-[url(./assets/sub-banner-3.jpg)] relative bg-cover w-full h-[35vh] rounded-md"></div>
        </div>
      </div>
    </>
  );
}

export default ShopThreeCategory;
