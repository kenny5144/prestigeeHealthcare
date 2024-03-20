import React from 'react';
import homeImg from "../../assets/homeImg.png"
import main from "../../assets/main.jpg"
import mainplace from "../../assets/mainplace.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Main = () => {
  const buttonClick = () => {
    alert('Button Clicked!');
    // Add your button click logic here
  };
  const commonText = "Your Common Text";
  return (
    <div className="relative justify-center flex flex-col mb-10  w-full  ">
     <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-screen"
      >
        <SwiperSlide><img className='h-screen' src={main} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-screen' src={mainplace} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-screen' src={homeImg} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Main;