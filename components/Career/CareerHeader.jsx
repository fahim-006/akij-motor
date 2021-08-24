import styles from './Career.module.scss';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import { Container } from '@material-ui/core';

const CareerHeader = () => {
  return (
    <>
      <div className={styles.Career__wrapper}>
        <Fade bottom>
          <Typography variant="h4" color="initial">
            Career
          </Typography>
        </Fade>
      </div>
    </>
  );
};

export default CareerHeader;
