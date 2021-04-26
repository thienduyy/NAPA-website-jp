import styles from './index.module.css';
import React, { useState } from 'react';
import clsx from 'clsx';
// import Slider from "react-slick";
// import ItemTeam from "./ItemTeam";
import FacebookIcon from 'assets/images/socials/facebook-f-brand.svg';
import LinkedInIcon from 'assets/images/socials/linkedin-in-brand.svg';
import TwitterIcon from 'assets/images/socials/twitter-brand.svg';
import { FetchIntroTeam, FetchOurTeam } from 'services/data/home';
import parser from 'html-react-parser';
import LazyLoadImage from 'components/common/LazyLoadImage';

function formatData(data) {
  if (!data) return;

  const lang = 'en';
  const {
    team_name,
    team_role,
    team_introduce,
    link_twitter,
    link_fb,
    link_li
  } = data;
  const dataArr = [];
  // console.log(team_role[0].language[lang])
  team_name.forEach((item, index) => {
    const obj = {
      avatar: item.image.original,
      name: item.language[lang],
      role: team_role[index] ? parser(team_role[index].language[lang]) : '',
      introduction: parser(team_introduce[index].language[lang]),
      socials: [
        {
          icon: FacebookIcon,
          link: link_fb[index].language[lang]
        },
        {
          icon: LinkedInIcon,
          link: link_li[index].language[lang]
        },
        {
          icon: TwitterIcon,
          link: link_twitter[index].language[lang]
        }
      ]
    };
    dataArr.push(obj);
  });

  return dataArr;
}

function Team(props) {
  const [selectedPer, setSelectedPer] = useState(0);
  const { loadingIT, introTeam } = FetchIntroTeam();
  const { loadingTeam, ourTeam, errorTeam } = FetchOurTeam();
  if (!ourTeam) return <div></div>;
  const data = [...formatData(ourTeam)];
  const parse2 = (text, placeholder) =>
    loadingTeam ? placeholder ?? '' : parser(text?.['en'] ?? '');

  const currentMember = data[selectedPer];

  const clickCurrentMember = (direction, dataLength) => {
    let current = selectedPer;
    if (direction === 'prev') {
      current = selectedPer === 0 ? dataLength - 1 : selectedPer - 1;
    }

    if (direction === 'next') {
      current = selectedPer === dataLength - 1 ? 0 : selectedPer + 1;
    }

    setSelectedPer(current);
  };

  return (
    <div className={styles.wrapAll} id='profile-section'>
      <div className={styles.wrapOurTeams}>
        <h2
          className={clsx(styles.ourTeamsTitle, 'wow slideInDown')}
          data-wow-delay='0.75s'
        >
          {!loadingIT && parse2(introTeam.intro_team_title)}
        </h2>
        <h5
          className={clsx(styles.ourTeamsSubTitle, 'wow slideInDown')}
          data-wow-delay='0.5s'
        >
          {!loadingIT && parse2(introTeam.intro_team_subtitle)}
        </h5>
        <div className={styles.wrapTeam}>
          <div className={styles.root}>
            <div className={clsx(styles.wrapImgSection, 'wow slideInLeft')}>
              {!loadingTeam &&
                !errorTeam &&
                ourTeam.team_name.map((entry, index) => (
                  <div
                    key={index}
                    className={clsx(
                      styles.wrapImg,
                      selectedPer === index
                        ? styles.border
                        : styles.hoverAnimation
                    )}
                    onClick={() => setSelectedPer(index)}
                  >
                    <LazyLoadImage
                      src={
                        !loadingTeam && !errorTeam
                          ? entry?.image?.original
                          : undefined
                      }
                      alt={parse2(entry.language)}
                      className={styles.img}
                    />
                  </div>
                ))}
            </div>
            <div className={clsx(styles.wrapContent, 'wow slideInRight')}>
              <div className={styles.header}>
                <LazyLoadImage
                  src={
                    !loadingTeam && !errorTeam
                      ? ourTeam?.team_name[selectedPer]?.image.original
                      : undefined
                  }
                  className={styles.avatar}
                  alt='image1'
                />
                <div className={styles.basicInfo}>
                  <h3>
                    {!loadingTeam &&
                      !errorTeam &&
                      parse2(ourTeam?.team_name[selectedPer]?.language)}
                  </h3>
                  <h5>
                    {!loadingTeam &&
                      !errorTeam &&
                      parse2(ourTeam?.team_role[selectedPer]?.language)}
                  </h5>
                </div>
              </div>
              <div className={styles.description}>
                <span>
                  {!loadingTeam &&
                    !errorTeam &&
                    parse2(ourTeam?.team_introduce[selectedPer]?.language)}
                </span>
              </div>
              <div className={styles.wrapSocial}>
                <a
                  href={
                    !loadingTeam && !errorTeam
                      ? parse2(ourTeam?.link_fb[selectedPer]?.language)
                      : '/'
                  }
                >
                  <img src={FacebookIcon} alt='a' />
                </a>
                <a
                  href={
                    !loadingTeam && !errorTeam
                      ? parse2(ourTeam?.link_li[selectedPer]?.language)
                      : '/'
                  }
                >
                  <img src={LinkedInIcon} alt='b' />
                </a>
                <a
                  href={
                    !loadingTeam && !errorTeam
                      ? parse2(ourTeam?.link_twitter[selectedPer]?.language)
                      : '/'
                  }
                >
                  <img src={TwitterIcon} alt='c' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapTeamMobile}>
          <div className={styles.imgSlider}>
            <div className={styles.imgWrapper}>
              <LazyLoadImage
                src={data[selectedPer === 0 ? 3 : selectedPer - 1].avatar}
                alt='s1'
              />
            </div>
            <div className={clsx(styles.imgWrapper, styles.imgActive)}>
              <LazyLoadImage src={currentMember.avatar} alt='s2' />
            </div>
            <div className={styles.imgWrapper}>
              <LazyLoadImage
                src={data[selectedPer === 3 ? 0 : selectedPer + 1]?.avatar}
                alt='s3'
              />
            </div>
            {/* {groupThreeMemberArr.map((d, i) => (
              <div className={styles.imgWrapper}><img src={d.avatar}/></div>
            ))} */}
            <div
              className={clsx(styles.sliderBtn, styles.prevArrow)}
              onClick={() => clickCurrentMember('prev', data.length)}
            >
              <div className={styles.prevIcon}></div>
            </div>
            <div
              className={clsx(styles.sliderBtn, styles.nextArrow)}
              onClick={() => clickCurrentMember('next', data.length)}
            >
              <div className={styles.nextIcon}></div>
            </div>
          </div>
          <div className={styles.introduction}>
            <div className={styles.brief}>
              <LazyLoadImage  src={currentMember.avatar} alt='avatar' />
              <div>
                <div
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    fontSize: 12,
                    marginBottom: 4
                  }}
                >
                  {currentMember.name}
                </div>
                <div style={{ color: '#FFFFFF', fontSize: 12, opacity: 0.54 }}>
                  {currentMember.role}
                </div>
              </div>
            </div>
            <div className={styles.description}>
              {currentMember.introduction}
            </div>
            <div className={styles.socials}>
              {currentMember.socials.map((s, i) => (
                <a key={i} href={s.link}>
                  <img src={s.icon} className='imgLink' alt='socials' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
