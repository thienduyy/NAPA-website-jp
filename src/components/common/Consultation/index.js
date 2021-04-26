// import { useEffect } from 'react';
import styles from './index.module.css';
import Button from 'components/common/Button';
import clsx from 'clsx';
import { FetchIntroEmail } from 'services/data/general';
import parser from 'html-react-parser';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import generalQueries from 'query/general';

function Consultation() {
  const { loadingEmail, introEmail } = FetchIntroEmail();
  const parse2 = (text, placeholder) =>
    loadingEmail ? placeholder ?? '' : parser(text?.['jp'] ?? '');
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [btnStt, setBtnStt] = useState(false);
  const [formTxt, setFormTxt] = useState(false);

  const [addCustomer] = useMutation(generalQueries.ADD_CUSTOMER);

  const handleChangeField = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const resetForm = () =>
    setState({
      name: '',
      email: '',
      message: ''
    });

  const submitSendMail = () => {
    if (state.name === '' || state.email === '' || state.message === '') return;
    setBtnStt(true);
    addCustomer({
      variables: {
        name: state.name,
        email: state.email,
        subject: 'Contact request from NAPA-WEB-EN',
        message: state.message
      }
    }).then((res) => {
      // console.log('Done', res);
      setBtnStt(false);
      resetForm();
      setFormTxt(true);
      setTimeout(() => setFormTxt(false), 1000);
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapContent}>
        <div id="contact-section" className={styles.consutation}></div>
        <div className={clsx(styles.wrapText, 'wow slideInLeft')}>
          <h2 className={styles.title}>
            {!loadingEmail && parse2(introEmail?.intro_email_title)}
          </h2>
          <h5 className={styles.subTitle}>
            {!loadingEmail && parse2(introEmail?.intro_email_subtitle)}
          </h5>
          <div className={styles.contactInfo}>
            <span>
              {!loadingEmail && parse2(introEmail?.intro_email_email)}
            </span>
            <span>
              {!loadingEmail && parse2(introEmail?.intro_email_phone)}
            </span>
          </div>
        </div>
        <div className={clsx(styles.wrapForm, 'wow slideInRight')}>
          <div className={styles.form}>
            <div className={styles.firstRow}>
              <div className={styles.name}>
                <input
                  className={styles.form1}
                  placeholder="フルネーム"
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={(e) => handleChangeField(e)}
                />
              </div>
              <div className={styles.email}>
                <input
                  className={styles.form1}
                  placeholder="Eメール"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={(e) => handleChangeField(e)}
                />
              </div>
            </div>
            <div className={styles.secondRow}>
              <textarea
                rows={5}
                className={styles.message}
                placeholder="メッセージ"
                name="message"
                value={state.message}
                onChange={(e) => handleChangeField(e)}
              />
            </div>
            <div className={styles.wrapBtn}>
              {/* <a href={`mailto:napaglobal@gmail.com?subject=${state.name}&body=${state.message}`}>
            <Button>Submit</Button>
            </a> */}
              <Button onClick={submitSendMail} disabled={btnStt}>
                Submit
              </Button>
              <div className={clsx(styles.text, formTxt && styles.textTrst)}>
                送信完了!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
