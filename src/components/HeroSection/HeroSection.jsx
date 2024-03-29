import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Hero.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function HeroSection() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="bg-[url(./assets/1.jpg)] w-full h-screen lg:h-screen sm:h-[50vh] bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="lg:pl-24 sm:pl-0 sm:text-center sideSec">
              <p className="text-lg text-white pb-5 hero-p">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="lg:text-6xl sm:text-2xl text-white text-left w-full pb-8 hero-heading">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md hero-btn">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./assets/2.jpg)] w-full h-screen lg:h-screen sm:h-[50vh] bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="lg:pl-24 sm:pl-0 sm:text-center sideSec">
              <p className="text-lg text-black pb-5 hero-p-black">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="lg:text-6xl sm:text-2xl text-black text-left w-full pb-8 hero-heading-black">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./assets/3.jpg)] w-full h-screen lg:h-screen sm:h-[50vh] bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="lg:pl-24 sm:pl-0 sm:text-center sideSec">
              <p className="text-lg text-white pb-5 hero-p">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="lg:text-6xl sm:text-2xl text-white text-left w-full pb-8 hero-heading">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./assets/1.jpg)] w-full h-screen lg:h-screen sm:h-[50vh] bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="lg:pl-24 sm:pl-0 sm:text-center sideSec">
              <p className="text-lg text-white pb-5 hero-p">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="lg:text-6xl sm:text-2xl text-white text-left w-full pb-8 hero-heading">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./assets/2.jpg)] w-full h-screen lg:h-screen sm:h-[50vh] bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="lg:pl-24 sm:pl-0 sm:text-center sideSec">
              <p className="text-lg text-black pb-5 hero-p-black">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="lg:text-6xl sm:text-2xl text-black text-left w-full pb-8 hero-heading-black">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./assets/3.jpg)] w-full h-screen lg:h-screen sm:h-[50vh] bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="lg:pl-24 sm:pl-0 sm:text-center sideSec">
              <p className="text-lg text-white pb-5 hero-p">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="lg:text-6xl sm:text-2xl text-white text-left w-full pb-8 hero-heading">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroSection;
