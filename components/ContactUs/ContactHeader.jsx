import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Contact.module.scss';
import Typography from '@material-ui/core/Typography';

const ContactHeader = () => {
  return (
    <div className={styles.contact__wrapper}>
      <Fade bottom>
        <Typography variant="h4" color="initial">
          Contact Us
        </Typography>
      </Fade>

      <Fade bottom>
        <Typography variant="h6" color="initial">
          Let&apos;s start a conversation
        </Typography>
      </Fade>
    </div>
  );
};

export default ContactHeader;
