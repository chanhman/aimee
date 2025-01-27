import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const videoOptions = videoSources.map((source) => ({
  autoplay: 'play',
  controls: true,
  loop: true,
  muted: true,
  responsive: true,
  fluid: true,
  sources: [source],
}));

export default function App() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
  };

  return (
    <Slider {...settings}>
      {videoOptions.map((options, index) => (
        <div key={index}>
          <VideoJS options={options} />
        </div>
      ))}
    </Slider>
  );
}
