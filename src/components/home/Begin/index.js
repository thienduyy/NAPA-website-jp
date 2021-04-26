import styles from './begin.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import SliderWrapper from './sliderWrapper';
import BannerHome1 from 'assets/images/home/banner-1.png';
import BannerHome1Mobile from 'assets/images/home/banner-1-mobile.png';
import BannerHome2 from 'assets/images/home/banner-2/ai-bg.png';
import BannerHome3 from 'assets/images/home/banner-3/banner-mobile_app.png';
import BannerHome4 from 'assets/images/home/banner-2/banner-2-bg.png';
import { useEffect } from 'react';

import Banner4Component from './banner4/blockchain';
import Banner2Component from './banner2/ai';
import Banner3Component from './banner3';

const contentSlide = [
  {
    id: 0,
    title: 'デジタル製品、及びサービスを開発します?',
    desc: 'NAPA GLOBAL はお客様の信頼される技術パートナーです。',
    desc1: 'お客様のビジョンを実現します。'
  },
  {
    id: 1,
    title: 'AIソリューションでお客様の製品をパワーアップします。',
    desc:
      '弊社のAI・ML専門家と開発チームは、AI技術力でお客様に適切なサービスを提供します。'
  },
  {
    id: 2,
    title: 'Web 及びモバイルアプリを開発します。',
    desc:
      '私たちは、日々大規模なアプリを開発して、画面ごとにレスポンシブデザインは、どんなデバイスの画面でもお客様のアプリを美しくなります。'
  },
  {
    id: 3,
    title: 'ブロックチェーンのイノベーションを実現します。',
    desc:
      '私たちは、本格的な暗号通貨交換やアプリを開発するため、お客様のパートナーとなります。',
    desc1:
      '弊社の専門家の知識により、ブロックチェーンベースのアプリケーションは簡単にアクセスできます。'
  }
];

const Element = ({ currentSlide, index, img }) => {
  return (
    <div className={clsx(styles.container)} id={`slide${index + 1}`}>
      <img
        alt="Banner"
        src={img}
        className={clsx(
          styles.bannerImg,
          currentSlide === index && styles.zoomInBanner
        )}
      />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1
            className={clsx(
              styles.title,
              currentSlide === index && styles.slideInTop
            )}
          >
            {contentSlide[index].title}
          </h1>
          <div className={styles.wrapSubTitle}>
            <p
              className={clsx(
                styles.text,
                currentSlide === index && styles.slideInBottomText,
                !contentSlide[index].desc1 && styles.width70
              )}
            >
              {contentSlide[index].desc}
            </p>
            {contentSlide[index].desc1 && (
              <p
                className={clsx(
                  styles.text,
                  currentSlide === index && styles.slideInBottomText,
                  styles.hidden
                )}
              >
                {contentSlide[index].desc1}
              </p>
            )}
          </div>
        </div>
      </div>
      {currentSlide === 1 && index === 1 && (
        <>
          <Banner2Component />
        </>
      )}
      {currentSlide === 2 && index === 2 && (
        <>
          <Banner3Component />
        </>
      )}
      {currentSlide === 3 && index === 3 && (
        <>
          <Banner4Component />
        </>
      )}
    </div>
  );
};

const Begin = () => {
  const [curSlide, setCurSlide] = useState(0);
  const [arrSlide, setArrSlide] = useState([
    { id: 1, img: BannerHome1, title: 'We made web and mobile app' },
    { id: 2, img: BannerHome2, title: 'We provide AI solution' },
    { id: 3, img: BannerHome3 },
    { id: 4, img: BannerHome4 }
  ]);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    draggable: false,
    swipe: true,
    autoplaySpeed: 8000,
    fade: true,
    pauseOnHover: false,
    beforeChange: (prev, next) => {
      setCurSlide(next);
    },
    customPaging: (i) => <button className={styles.pagingDot}></button>
  };

  useEffect(() => {
    if (window.screen.width < 600) {
      let newState = [...arrSlide];
      arrSlide[0].img = BannerHome1Mobile;
      arrSlide[1].img = BannerHome4;
      setArrSlide(newState);
    }
  }, []);
  return (
    <div className={styles.root} id="home-section">
      {curSlide === 0 && (
        <div className={styles.animate}>
          <div className={styles.starWrapper}>
            <div>
              {[...Array(19).keys()].map((entry, index) => (
                <div className={styles.star} key={index}></div>
              ))}
            </div>
            <div>
              {[...Array(19).keys()].map((entry, index) => (
                <div className={styles.tiniStar} key={index}></div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={styles.sliderBox}>
        <SliderWrapper>
          <Slider {...sliderSettings}>
            <Element currentSlide={curSlide} index={0} img={arrSlide[0].img} />
            <Element currentSlide={curSlide} index={1} img={arrSlide[1].img} />
            <Element currentSlide={curSlide} index={2} img={arrSlide[2].img} />
            <Element currentSlide={curSlide} index={3} img={arrSlide[3].img} />
          </Slider>
        </SliderWrapper>
      </div>
    </div>
  );
};

export default Begin;
