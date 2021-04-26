import styles from './index.module.css';
import WorldMap from 'assets/images/home/world-map.png';
import clsx from 'clsx';
import Earth from 'assets/flag/earth-globe.svg';
import VNFlag from 'assets/flag/vn.svg';
import USAFlag from 'assets/flag/usa.svg';
import AUSFlag from 'assets/flag/aus.svg';
import JPFlag from 'assets/flag/jp.svg';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SlideWrapper from './SlideWrapper';
import BackgroundMobile from './components/backgroundMobile';

const arrOffices = [
  {
    id: 1,
    flag: Earth,
    alt: 'Earth',
    dot: null,
    activeState: null,
    h3: '私たちの事務所',
    content: '世界に4つオフィスを展開しています。',
    leader: null,
    fullContent: null
  },
  {
    id: 2,
    flag: VNFlag,
    alt: "Vietnam's flag",
    dot: styles.VNDot,
    activeState: 'vn',
    h3: 'Vietnam',
    content: 'ベトナムのダナンに置ける本社事務所の代表者 ',
    leader: 'Mr. Peter Ngo',
    fullContent:
      'Peter Ngoは、情報技術アウトソーシング業界にビジネスおよび技術リーダーであり、米国、日本、韓国、ベトナムの大企業およびアジャ イルスタートアップとの12年の経験があります。Peterは、ソフトウェアエンジニアからデリバリーマネージャーまで、ソフトウェア開発 におけるすべての重要な役割に取り組んできました。 NAPAGlobalを設立する前にアジアの大手IT企業の1つであるFPTでビジネスユニット ディレクターを担当しました。Peterは、NAPA Globalのクライアントがビジネス目標を達成するのを支援するために、彼の技術とビジネス に対する深い理解をもたらし続けています。'
  },
  {
    id: 3,
    flag: AUSFlag,
    alt: "Australia's flag",
    dot: styles.AUDot,
    activeState: 'au',
    h3: 'Australia',
    content: 'オーストラリアに置ける事務所の代表者 ',
    leader: 'Ngo Danny 博士',
    fullContent:
      'Dr. Danny Ngo has 14 years of R&D experience in Oceania and North America, having established himself as an international expert in the domain of the Internet of Things, 5G/6G telecommunications systems, and intelligent transportation. He has collaborated with the world’s largest corporations in the telecommunications industry in several key R&D projects. At Napa Global, he is a principal technology advisor and a VP leading the market development efforts in Australia and New Zealand. He continues to bring his expert knowledge of advanced engineering and technology into the software and systems design process.'
  },
  {
    id: 4,
    flag: USAFlag,
    alt: "US's flag",
    dot: styles.NADot,
    activeState: 'na',
    h3: 'US',
    content: 'アメリカに置ける事務所の代表者 ',
    leader: 'Ms. Kimberly Bui',
    fullContent:
      'Kimberly Bui is an expert in state-of-the-art technologies and business strategies. She has advised entrepreneurs from startups and executive business leaders from multi-national corporations on a wide range of technologies in AI, robotics, e-commerce, and financial services to meet their business needs. At NAPA Global, Kimberly provides valuable guidance for our development teams to best serve different types of clients.'
  },
  {
    id: 5,
    flag: JPFlag,
    alt: "Japan's flag",
    dot: styles.JPDot,
    activeState: 'jp',
    h3: 'Japan',
    content: '日本に置ける NAPA SOLUTIONS 株式会社の代表者 ',
    leader: 'Mr. Azel Le',
    fullContent:
      'Azel Leは情報技術業界で10年以上の実務経験を持つ連続起業家であり、経験豊富な技術者です。彼は組み込みシステム分野の専門家であり、多くの自動車会社に困難なエンジニアリング問題を解決するのを支援してきました。Azel LeはITおよび国際取引でサービスをご提供いたしますいくつかのスタートアップを設立しました。Azelは、NAPA Globalネットワークの拡大を支援するとともに、クライアントに高品質のサービスをご提供いたしますために、ビジョンと専門知識をもたらし続けています。'
  }
];

const Offices = () => {
  const [activeCountry, setActiveCountry] = useState('vn');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isShowFullContent, setIsShowFullContent] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    }
  };
  useEffect(() => {
    setIsShowFullContent(false);
  }, [activeCountry]);

  function handleCloseTooltip(e) {
    e.stopPropagation();
    setActiveCountry(null);
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>私たちの事務所</h1>
      <p className={styles.subTitle}>
        私たちは、世界各地に事務所と代表者を置いています。お客様の言語で話し、お客様の地域の課題を理解します。私たちと繋がって、新たな可能性を発見しましょう。
      </p>
      <div className={styles.wrapMap}>
        <img src={WorldMap} alt="World Map" className={styles.map} />
        {arrOffices.map((entry, index) => (
          <div
            key={index}
            className={clsx(
              entry.dot,
              activeCountry === entry.activeState && styles.show
            )}
            onClick={() => setActiveCountry(entry.activeState)}
          >
            <div className={styles.wrapTooltip}>
              <div className={styles.tooltip}>
                <div className={styles.ttHeader}>
                  <img
                    alt={entry.alt}
                    src={entry.flag}
                    className={styles.flag}
                  />
                  <h3>{entry.h3}</h3>
                  <span
                    className={styles.closeIcon}
                    onClick={handleCloseTooltip}
                  >
                    &times;
                  </span>
                </div>
                <div className={styles.ttBody}>
                  <p>
                    {entry.content}
                    <strong
                      onClick={() => setIsShowFullContent(!isShowFullContent)}
                    >
                      {entry.leader}
                    </strong>
                  </p>
                  {isShowFullContent && (
                    <p className={styles.fullContent}>{entry.fullContent}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Responsive mobile */}
      <div className={styles.sliderBox}>
        <div className={styles.wrapBg}>
          <BackgroundMobile currentSlide={currentSlide} />
        </div>
        <SlideWrapper className={styles.styled}>
          <Slider {...settings}>
            {arrOffices.map((entry, index) => (
              <div className={styles.wrapSlide} key={index}>
                <div className={styles.slideRoot}>
                  <div className={styles.slideHeader}>
                    {/* <img src={VNFlag} className={styles.flag} alt='Flag' /> */}
                    <h3>
                      {entry.h3}
                      <span className={styles.flagMobile}>
                        <img
                          src={entry.flag}
                          className={styles.flag}
                          alt={entry.alt}
                        />
                      </span>
                    </h3>
                  </div>
                  <div className={styles.slideBody}>
                    <p>
                      {entry.content}
                      <strong
                        onClick={() => setIsShowFullContent(!isShowFullContent)}
                      >
                        {entry.leader}
                      </strong>
                    </p>
                    {isShowFullContent && (
                      <p className={styles.fullContent}>{entry.fullContent}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </SlideWrapper>
      </div>
    </div>
  );
};

export default Offices;
