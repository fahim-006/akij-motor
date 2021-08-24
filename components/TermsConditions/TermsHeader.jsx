import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './TermsConditions.module.scss';

const TermsHeader = () => {
  return (
    <div className={styles.terms__wrapper}>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          className={styles.terms__content}
        >
          <div className={styles.terms__info}>
            <Fade bottom>
              <Typography variant="h4" color="initial">
                Terms & Conditions
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography variant="h6" color="initial">
                THE TERMS AND CONDITIONS OF AKIJ Motors
              </Typography>
            </Fade>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default TermsHeader;
