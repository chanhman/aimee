import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import VideoJS from './VideoJS';

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
  const [loadedVideos, setLoadedVideos] = useState([0]); // Load first video

  const handleSlideChange = (swiper) => {
    const nextIndex = swiper.activeIndex;
    if (!loadedVideos.includes(nextIndex)) {
      setLoadedVideos((prev) => [...prev, nextIndex]);
    }
  };

  return (
    <Swiper
      autoplay={{ delay: 9000 }}
      direction="vertical"
      grabCursor
      loop
      modules={[Autoplay]}
      onSlideChange={handleSlideChange}
      slidesPerView={1}
      spaceBetween={50}
      touchEventsTarget="container"
    >
      {videoSources.map((video, index) => (
        <SwiperSlide key={index}>
          <div className="video-container">
            {loadedVideos.includes(index) ? (
              <VideoJS src={video.src} />
            ) : (
              <div className="video-placeholder">Loading...</div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
