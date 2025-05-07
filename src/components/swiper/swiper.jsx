import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Container from '../../assets/Container.svg'

import Sidebar from '../../assets/sidebar.svg'

import './swiper.css'

function SwiperSect() {
    return (
        <div className='flex'>
            

      <div className="swiper">
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log(swiper)}

        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div>
            <img src={Container} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Container} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Container} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>

      <img src={Sidebar} alt="" />
        </div>
    )
}


export default SwiperSect;