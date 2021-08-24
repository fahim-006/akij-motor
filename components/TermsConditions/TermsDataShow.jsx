import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './TermsConditions.module.scss';
import Fade from 'react-reveal/Fade';

const TermsDataShow = ({ data, number }) => {
  return (
    <div className={styles.terms__list}>
      <Typography
        variant="h6"
        color="initial"
        style={{ fontSize: '18px', fontWeight: '600', color: '#13488e' }}
      >
        {number}
        <Fade left> - {data?.title}</Fade>
      </Typography>

      <Typography variant="subtitle1" color="initial">
        {data?.description}
      </Typography>
    </div>
  );
};

export default TermsDataShow;
