// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Virtual } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import VideoJS from './VideoJS';

const videoSources = [
  { src: '/INFINITY SCROLL_1.mp4' },
  { src: '/INFINITY SCROLL_2.mp4' },
  { src: '/INFINITY SCROLL_3.mp4' },
  { src: '/INFINITY SCROLL_4.mp4' },
  { src: '/INFINITY SCROLL_5.mp4' },
  { src: '/INFINITY SCROLL_6.mp4' },
  { src: '/INFINITY SCROLL_7.mp4' },
  { src: '/INFINITY SCROLL_8.mp4' },
  { src: '/INFINITY SCROLL_9.mp4' },
  { src: '/INFINITY SCROLL_10.mp4' },
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
