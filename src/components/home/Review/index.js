import styles from './review.module.css';
import Slider from 'react-slick';
import ReviewItem from './ReviewItem';
import clsx from 'clsx';
import { FetchAllRenew, FetchIntroFeedback } from 'services/data/home';
import parser from 'html-react-parser';
import SlideWrapper from './slideWrapper';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={clsx(className, styles.nextArrow)} onClick={onClick}>
      <div className={styles.nextArrowIcon}></div>
      <div className={styles.nextHalfCircle}></div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={clsx(className, styles.prevArrow)} onClick={onClick}>
      <div className={styles.prevArrowIcon}></div>
      <div className={styles.prevHalfCircle}></div>
    </div>
  );
}

const Review = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  const { loadingIF, introFeedback, errorIF } = FetchIntroFeedback();
  const { loadingRenew, dataRenew, errorRenew } = FetchAllRenew();
  const parse2 = (text, placeholder) =>
    loadingRenew ? placeholder ?? '' : parser(text?.['jp'] ?? '');
  return (
    <div className={styles.root} id="review-section">
      <div className={styles.container}>
        <h1 className={styles.title}>
          {!loadingIF &&
            !errorIF &&
            parse2(introFeedback?.intro_feedback_subtile)}
        </h1>
        <h3 className={styles.subtitle}>
          {!loadingIF &&
            !errorIF &&
            parse2(introFeedback?.intro_feedback_subtitle)}
        </h3>
        <div className={styles.sliderBox}>
          <SlideWrapper>
            <Slider {...sliderSettings}>
              {!loadingRenew &&
                !errorRenew &&
                dataRenew?.renews.map((reviewer, index) => (
                  <ReviewItem
                    key={index}
                    {...reviewer}
                    loading={loadingRenew}
                  />
                ))}
            </Slider>
          </SlideWrapper>
        </div>
      </div>
    </div>
  );
};

export default Review;
