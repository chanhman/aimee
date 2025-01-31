// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Virtual } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import VideoJS from './VideoJS';

const videoSources = [
  { src: '/INFINITY SCROLL_1.webm' },
  { src: '/INFINITY SCROLL_2.webm' },
  { src: '/INFINITY SCROLL_3.webm' },
  { src: '/INFINITY SCROLL_4.webm' },
  { src: '/INFINITY SCROLL_5.webm' },
  { src: '/INFINITY SCROLL_6.webm' },
  { src: '/INFINITY SCROLL_7.webm' },
  { src: '/INFINITY SCROLL_8.webm' },
  { src: '/INFINITY SCROLL_9.webm' },
  { src: '/INFINITY SCROLL_10.webm' },
];

export default function App() {
  return (
    <Swiper
      direction="vertical"
      grabCursor
      loop
      modules={[Autoplay, Virtual]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      slidesPerView={1}
      touchEventsTarget="container"
      virtual
    >
      {videoSources.map((video, index) => (
        <SwiperSlide key={video} virtualIndex={index}>
          <div className="video-container">
            <VideoJS src={video.src} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
