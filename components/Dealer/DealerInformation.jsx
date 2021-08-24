import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { dealer } from "./dealerData";
import SingleDealer from "./SingleDealer";
import styles from "./Dealer.module.scss";
import Fade from "react-reveal/Fade";

const DealerInformation = () => {
  return (
    <div className={styles.DealerInformation__content}>
      <div>
        <Fade>
          <Typography
            variant="h4"
            color="initial"
            className={styles.DealerInformation__title}
          >
            Dealer information
          </Typography>
        </Fade>
        <div className={styles.underline}></div>
      </div>
      <div>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          style={{ marginTop: "30px" }}
        >
          {dealer?.map((data) => (
            <Grid item md={6} sm={6} xs={12} key={data.id}>
              <SingleDealer data={data} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default DealerInformation;
