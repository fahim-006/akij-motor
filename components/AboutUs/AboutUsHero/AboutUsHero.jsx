import { Container, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import classes from './AboutUsHero.module.scss';

const AboutUsHero = () => {
  return (
    <section className={classes.about__us}>
      <Fade bottom>
        <Typography variant="h4" color="initial">
          About Us
        </Typography>
      </Fade>
    </section>
  );
};

export default AboutUsHero;
