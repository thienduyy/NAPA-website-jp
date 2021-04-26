import styles from './ai.module.css';
import ImgAI from 'assets/images/home/banner-2/main-min.png';
import ImgShadow from 'assets/images/home/banner-2/shadow.svg';
import ImgDataBase from 'assets/images/home/banner-2/box-min.png';
import ImgChat from 'assets/images/home/banner-2/chat-min.png';
import ImgRobot from 'assets/images/home/banner-2/machine-min.png';
import ImgPhone from 'assets/images/home/banner-2/scan-min.png';

const AI = () => {
    return (
        <>
            <img alt='AI' src={ImgAI} className={styles.imgAI} />
            <img alt='Shadow AI' src={ImgShadow} className={styles.imgShadow} />
            <img alt='Database' src={ImgDataBase} className={styles.imgDB} />
            <img alt='Chat' src={ImgChat} className={styles.imgChat} />
            <img alt='Robot' src={ImgRobot} className={styles.imgRobot} />
            <img alt='Phone' src={ImgPhone} className={styles.imgPhone} />
        </>
    )
}

export default AI;