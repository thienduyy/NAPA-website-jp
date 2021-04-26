import styles from './reviewItem.module.css';
import QuoteIcon from 'assets/icons/quotes.svg';
import parser from 'html-react-parser';
import LazyLoadImage from 'components/common/LazyLoadImage';

const ReviewItem = ({ message, name, position, image, loading }) => {
  const parse2 = (text, placeholder) =>
    loading ? placeholder ?? '' : parser(text?.['jp'] ?? '');
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.quoteBox}>
          <img className={styles.quoteIcon} src={QuoteIcon} alt="" />
          <div className={styles.quote}>{parse2(message)}</div>
        </div>
        <div className={styles.reviewerBox}>
          <LazyLoadImage
            src={!loading ? image?.original : undefined}
            className={styles.avatar}
            alt=""
          />
          <div className={styles.infor}>
            <h4 className={styles.name}>{name}</h4>
            <h4 className={styles.pos}>{position}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
