import React from 'react';

import styles from './AllProducts.module.scss';
import { Container } from '@material-ui/core';
import AllProductsInformation from './AllProductsInformation';

const AllProducts = () => {
  return (
    <div>
     
      <div className={styles.AllProducts__content}>
        <Container className={styles.locations}>
         
        </Container>

        <Container>
          <div className={styles.AllProducts__information}>
            <AllProductsInformation />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllProducts;
