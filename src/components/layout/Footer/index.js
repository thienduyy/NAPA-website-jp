import styles from './index.module.css';
// import { footerOptsLeft, footerOptsRight } from 'navigations';
import FacebookIcon from 'assets/images/socials/facebook-f-brand.svg';
import LinkedInIcon from 'assets/images/socials/linkedin-in-brand.svg';
import TwitterIcon from 'assets/images/socials/twitter-brand.svg';
import { FetchFooterLeft, FetchFooterRight } from 'services/data/home';
import LogoNapa from 'assets/images/home/logo_napa.svg';

const Footer = () => {
  const { loadingFL, footerLeft, errorFL } = FetchFooterLeft();
  const { loadingFR, footerRight, errorFR } = FetchFooterRight();
  if (!footerLeft || !footerRight) return <div></div>;
  if (loadingFL || errorFL || loadingFR || errorFR) return <div></div>;
  // console.log(footerLeft, footerRight);
  const leftOpts = [
    {
      title: footerLeft?.footer_left_title[0].jp,
      childOpts: footerLeft?.footer_name_top?.map((i) => ({ name: i.jp }))
    },
    {
      title: footerLeft?.footer_left_title[1].jp,
      // childOpts: footerLeft?.footer_name_bottom?.map(i => ({name: i.en}))
      childOpts: [{ name: footerLeft?.footer_name_bottom?.jp }]
    }
  ];
  // const leftOpts =
  const rightOpts = [
    {
      title: footerRight?.footer_right_title?.jp,
      childOpts: footerRight?.footer_right_name?.map((i) => ({ name: i.jp }))
    }
  ];

  return (
    <footer className={styles.root}>
      <div className={styles.wrapHelperLink}>
        <div className={styles.socialLink}>
          <div className={styles.imgNapa}>
            <img alt="Logo Napa" src={LogoNapa} />
          </div>
          <div className={styles.wrapSocial}>
            <div
              onClick={() =>
                (window.location.href = 'https://www.facebook.com/Napaglobal')
              }
            >
              <img alt="Facebook Logo" src={FacebookIcon} />
            </div>
            <div
              onClick={() =>
                (window.location.href =
                  'https://www.linkedin.com/company/napaglobal')
              }
            >
              <img alt="Linkedin Logo" src={LinkedInIcon} />
            </div>
            {/* <div onClick={() => window.location.href = 'https://www.linkedin.com/company/napaglobal'}>
              <img alt='LinkedIn Logo' src={TwitterIcon} />
            </div> */}
          </div>
        </div>
        <div className={styles.width20}>
          {leftOpts.map((opts, key) => (
            <div
              key={key}
              className={key < leftOpts.length - 1 ? styles.mb16 : undefined}
            >
              <h4 className={styles.title}>{opts.title}</h4>
              <ul className={styles.details}>
                {opts?.childOpts?.map((childOpt, index) => (
                  <li key={index} className={styles.child}>
                    {childOpt.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.width20}>
          {rightOpts &&
            rightOpts.map((opts, key) => (
              <div
                key={key}
                className={key < leftOpts.length - 1 ? styles.mb16 : undefined}
              >
                <h4 className={styles.title}>{opts.title}</h4>
                <ul className={styles.details}>
                  {opts?.childOpts?.map((childOpt, index) => (
                    <li key={index} className={styles.child}>
                      {childOpt.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.wrapCopyRight}>
        <span className={styles.copyRight}>
          © 2020 NAPA Global. All Rights Reserved.
        </span>
        {/* <span className={styles.terms}>Terms of use</span>
        <div className={styles.split} />
        <span className={styles.terms}>Privacy Policy</span> */}
      </div>
    </footer>
  );
};

export default Footer;
