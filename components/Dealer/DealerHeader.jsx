import styles from './Dealer.module.scss';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import { Container } from '@material-ui/core';

const DealerHeader = () => {
  return (
    <>
      <div className={styles.dealer__wrapper}>
        <Fade bottom>
          <Typography variant="h4" color="initial">
            Dealer
          </Typography>
        </Fade>

        <Fade bottom>
          <p>CONNECT TO NEAREST AKIJ MOTORS SHOWROOMS</p>
        </Fade>
      </div>

      <Container>
        <Fade bottom>
          <p className={styles.headline}>AKIJ MOTORS SHOWROOM IN BANGLADESH</p>
        </Fade>
      </Container>
      <Container className={styles.subContent}>
        <p>
          Locate and find Akij Motors showrooms in Bangladesh with their address
          and contact information. Akij Motors gives you easy access to the
          addresses and contact details of Akij Motors Dealer Showrooms in
          Bangladesh.
        </p>
      </Container>
    </>
  );
};

export default DealerHeader;
