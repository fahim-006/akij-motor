import {
  CardContent,
  Card,
  CardMedia,
  Typography,
  Divider,
} from '@material-ui/core';
import React from 'react';
import styles from './AllProducts.module.scss';
import PhoneIcon from '@material-ui/icons/Phone';
import PinDropIcon from '@material-ui/icons/PinDrop';
const SingleAllProducts = ({ data }) => {
  return (
    <Card className={styles.AllProducts__card}>
      <div className={styles.AllProducts__image}>
        <CardMedia
          component="img"
          image={data?.image}
          height={150}
          alt={data?.title}
          loading="lazy"
          objectFit="contain"
          layout="fill"
        />
        <div className={styles.AllProducts__image_overtext}>
         
        </div>
      </div>
      <CardContent className={styles.AllProducts__info}>
        <Typography variant="subtitle1" color="initial">
          <span>
            {' '}
           
          </span>{' '}<br/><br/>
          {data?.title}
        </Typography>
      </CardContent>     
    </Card>
  );
};

export default SingleAllProducts;
