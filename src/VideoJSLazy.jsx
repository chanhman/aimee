/* eslint-disable react/prop-types */
import ReactPlayer from 'react-player/lazy'
import { useInView } from 'react-intersection-observer';

export const VideoJSLazy = ({ src }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <ReactPlayer url={src} playing={inView} loop />
    </div>
  );
};

export default VideoJSLazy;
