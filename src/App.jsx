// Import Swiper React components
import { Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import VideoJS from "./VideoJS";

const videoSources = [
  { src: "/INFINITY SCROLL_24.mp4" },
  { src: "/INFINITY SCROLL_67.mp4" },
  { src: "/INFINITY SCROLL_52.mp4" },
  { src: "/INFINITY SCROLL_37.mp4" },
  { src: "/INFINITY SCROLL_110.mp4" },
  { src: "/INFINITY SCROLL_16.mp4" },
  { src: "/INFINITY SCROLL_94.mp4" },
  { src: "/INFINITY SCROLL_8.mp4" },
  { src: "/INFINITY SCROLL_71.mp4" },
  { src: "/INFINITY SCROLL_1.mp4" },
  { src: "/INFINITY SCROLL_78.mp4" },
  { src: "/INFINITY SCROLL_60.mp4" },
  { src: "/INFINITY SCROLL_99.mp4" },
  { src: "/INFINITY SCROLL_112.mp4" },
  { src: "/INFINITY SCROLL_22.mp4" },
  { src: "/INFINITY SCROLL_47.mp4" },
  { src: "/INFINITY SCROLL_106.mp4" },
  { src: "/INFINITY SCROLL_34.mp4" },
  { src: "/INFINITY SCROLL_44.mp4" },
  { src: "/INFINITY SCROLL_58.mp4" },
  { src: "/INFINITY SCROLL_91.mp4" },
  { src: "/INFINITY SCROLL_5.mp4" },
  { src: "/INFINITY SCROLL_3.mp4" },
  { src: "/INFINITY SCROLL_100.mp4" },
  { src: "/INFINITY SCROLL_113.mp4" },
  { src: "/INFINITY SCROLL_86.mp4" },
  { src: "/INFINITY SCROLL_42.mp4" },
  { src: "/INFINITY SCROLL_93.mp4" },
  { src: "/INFINITY SCROLL_19.mp4" },
  { src: "/INFINITY SCROLL_27.mp4" },
  { src: "/INFINITY SCROLL_108.mp4" },
  { src: "/INFINITY SCROLL_79.mp4" },
  { src: "/INFINITY SCROLL_85.mp4" },
  { src: "/INFINITY SCROLL_36.mp4" },
  { src: "/INFINITY SCROLL_9.mp4" },
  { src: "/INFINITY SCROLL_50.mp4" },
  { src: "/INFINITY SCROLL_7.mp4" },
  { src: "/INFINITY SCROLL_32.mp4" },
  { src: "/INFINITY SCROLL_81.mp4" },
  { src: "/INFINITY SCROLL_48.mp4" },
  { src: "/INFINITY SCROLL_83.mp4" },
  { src: "/INFINITY SCROLL_40.mp4" },
  { src: "/INFINITY SCROLL_77.mp4" },
  { src: "/INFINITY SCROLL_2.mp4" },
  { src: "/INFINITY SCROLL_12.mp4" },
  { src: "/INFINITY SCROLL_101.mp4" },
  { src: "/INFINITY SCROLL_6.mp4" },
  { src: "/INFINITY SCROLL_39.mp4" },
  { src: "/INFINITY SCROLL_45.mp4" },
  { src: "/INFINITY SCROLL_92.mp4" },
  { src: "/INFINITY SCROLL_53.mp4" },
  { src: "/INFINITY SCROLL_57.mp4" },
  { src: "/INFINITY SCROLL_84.mp4" },
  { src: "/INFINITY SCROLL_13.mp4" },
  { src: "/INFINITY SCROLL_63.mp4" },
  { src: "/INFINITY SCROLL_114.mp4" },
  { src: "/INFINITY SCROLL_29.mp4" },
  { src: "/INFINITY SCROLL_17.mp4" },
  { src: "/INFINITY SCROLL_20.mp4" },
  { src: "/INFINITY SCROLL_15.mp4" },
  { src: "/INFINITY SCROLL_87.mp4" },
  { src: "/INFINITY SCROLL_4.mp4" },
  { src: "/INFINITY SCROLL_31.mp4" },
  { src: "/INFINITY SCROLL_64.mp4" },
  { src: "/INFINITY SCROLL_109.mp4" },
  { src: "/INFINITY SCROLL_76.mp4" },
  { src: "/INFINITY SCROLL_35.mp4" },
  { src: "/INFINITY SCROLL_18.mp4" },
  { src: "/INFINITY SCROLL_49.mp4" },
  { src: "/INFINITY SCROLL_74.mp4" },
  { src: "/INFINITY SCROLL_68.mp4" },
  { src: "/INFINITY SCROLL_11.mp4" },
  { src: "/INFINITY SCROLL_30.mp4" },
  { src: "/INFINITY SCROLL_70.mp4" },
  { src: "/INFINITY SCROLL_82.mp4" },
  { src: "/INFINITY SCROLL_41.mp4" },
  { src: "/INFINITY SCROLL_23.mp4" },
  { src: "/INFINITY SCROLL_38.mp4" },
  { src: "/INFINITY SCROLL_90.mp4" },
  { src: "/INFINITY SCROLL_115.mp4" },
  { src: "/INFINITY SCROLL_46.mp4" },
  { src: "/INFINITY SCROLL_97.mp4" },
  { src: "/INFINITY SCROLL_56.mp4" },
  { src: "/INFINITY SCROLL_10.mp4" },
  { src: "/INFINITY SCROLL_88.mp4" },
  { src: "/INFINITY SCROLL_72.mp4" },
  { src: "/INFINITY SCROLL_116.mp4" },
  { src: "/INFINITY SCROLL_14.mp4" },
  { src: "/INFINITY SCROLL_75.mp4" },
  { src: "/INFINITY SCROLL_33.mp4" },
  { src: "/INFINITY SCROLL_98.mp4" },
  { src: "/INFINITY SCROLL_66.mp4" },
  { src: "/INFINITY SCROLL_54.mp4" },
  { src: "/INFINITY SCROLL_43.mp4" },
  { src: "/INFINITY SCROLL_26.mp4" },
  { src: "/INFINITY SCROLL_55.mp4" },
  { src: "/INFINITY SCROLL_25.mp4" },
  { src: "/INFINITY SCROLL_73.mp4" },
  { src: "/INFINITY SCROLL_95.mp4" },
  { src: "/INFINITY SCROLL_107.mp4" },
  { src: "/INFINITY SCROLL_96.mp4" },
  { src: "/INFINITY SCROLL_28.mp4" },
  { src: "/INFINITY SCROLL_62.mp4" },
  { src: "/INFINITY SCROLL_65.mp4" },
  { src: "/INFINITY SCROLL_89.mp4" },
  { src: "/INFINITY SCROLL_102.mp4" },
  { src: "/INFINITY SCROLL_111.mp4" },
  { src: "/INFINITY SCROLL_69.mp4" },
];

export default function App() {
  return (
    <Swiper
      direction="vertical"
      grabCursor
      loop
      modules={[Autoplay, Virtual]}
      onSlideChange={() => console.log("slide change")}
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
