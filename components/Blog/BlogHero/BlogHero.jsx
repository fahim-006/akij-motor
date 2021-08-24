import { Typography } from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './BlogHero.module.scss';

const BlogHero = () => {
  return (
    <div className={styles.blog__wrapper}>
      <Fade bottom>
        <Typography variant="h4" color="initial">
          Blog
        </Typography>
      </Fade>
    </div>
  );
};

export default BlogHero;
