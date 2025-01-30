import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import VideoJS from './VideoJS';
import VideoJSLazy from './VideoJSLazy';

const videoSources = [
  { src: '/INFINITY SCROLL_1.mp4', type: 'video/mp4' },
  { src: '/INFINITY SCROLL_2.mp4', type: 'video/mp4' },
  { src: '/INFINITY SCROLL_3.mp4', type: 'video/mp4' },
  { src: '/INFINITY SCROLL_4.mp4', type: 'video/mp4' },
  { src: '/INFINITY SCROLL_5.mp4', type: 'video/mp4' },
  { src: '/INFINITY SCROLL_6.mp4', type: 'video/mp4' },
  { src: '/INFINITY SCROLL_7.mp4', type: 'video/mp4' },
  { src: '/INFINITY SCROLL_8.mp4', type: 'video/mp4' },
  { src: '/INFINITY SCROLL_9.mp4', type: 'video/mp4' },
  { src: '/INFINITY SCROLL_10.mp4', type: 'video/mp4' },
];

export default function App() {
  const [showLoader, setShowLoader] = useState(true)
  
  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 8000);
    return () => {
      clearTimeout(timeout);
    };
  }, [])
  return (
    showLoader ? <div className="loader">Loading...</div> : (
      <Swiper
        autoplay={{ delay: 9 * 1000 }}
        direction='vertical'
        grabCursor
        loop
        modules={[Autoplay]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={1}
        spaceBetween={50}
        touchEventsTarget="container"
      >
        {videoSources.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="video-container">
              <VideoJS src={video.src} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
}
