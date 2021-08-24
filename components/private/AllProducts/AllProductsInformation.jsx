import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { AllProducts } from './AllProductsData';
import SingleAllProducts from './SingleAllProducts';
import styles from './AllProducts.module.scss';
import Fade from 'react-reveal/Fade';


const AllProductsInformation = () => {
  return (
    <div className={styles.AllProductsInformation__content}>
      <div>
        <Fade>
          <Typography
            variant="h4"
            color="initial"
            className={styles.AllProductsInformation__title}
          >
            All Products
          </Typography>
        </Fade>
        <div className={styles.underline}></div>
      </div>
      <div>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          {AllProducts?.map((data) => (
            <Grid item md={3} sm={4} xs={12} key={data.id}>
              <SingleAllProducts data={data} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={styles.btnContainer}>
        <div className={styles.btnCenter}>
        <button className={styles.btn}>View All</button>
        </div>
      </div>
      
    </div>
  );
};

export default AllProductsInformation;
