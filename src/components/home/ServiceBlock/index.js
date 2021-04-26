import styles from './serviceBlock.module.css';
import parser from 'html-react-parser';

const ServiceBlock = (service) => {
  const parse2 = (text, placeholder) =>
    service.loading ? placeholder ?? '' : parser(text?.['jp'] ?? '');

  return (
    <div className={styles.root} key={service.index}>
      <div className={styles.container}>
        <div className={styles.circleTopLeft} />
        <div className={styles.circleTopRight} />
        <div className={styles.circleBottomRight} />
      </div>
      <div className={styles.iconBox}>
        <img
          alt="service-icon"
          className={styles.iconImage}
          align="middle"
          src={!service.loading ? service?.iconSelected?.original : undefined}
        />
      </div>
      <h2>{parse2(!service.loading && service?.fullName)}</h2>
      <p>{parse2(!service.loading && service?.description)}</p>
    </div>
  );
};

export default ServiceBlock;
