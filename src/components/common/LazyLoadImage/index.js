import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ alt, src, className }) => {
  return (
    <LazyLoadImage alt={alt} src={src} className={className} effect='blur' />
  );
};

export default Image;
