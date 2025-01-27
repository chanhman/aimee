/* eslint-disable react/prop-types */
import ReactPlayer from 'react-player';

import { useInView } from 'react-intersection-observer';

export const VideoJS = ({ src }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <ReactPlayer url={src} playing={inView} loop />
    </div>
  );
};

export default VideoJS;
