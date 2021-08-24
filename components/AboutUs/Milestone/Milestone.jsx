import { Container, Typography, Grid } from "@material-ui/core";
import classes from "./Milestone.module.scss";
import MilestoneSlider from "./MilestoneSlider";

const Milestone = () => {
  return (
    <div className={classes.milestone__wrapper}>
      <Container>
        <Typography
          variant="h5"
          color="initial"
          className={classes.milestone__title}
        >
          Some of our Milestones
        </Typography>

        <div className={classes.milestone__slider}>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
          >
            <Grid item md={6} lg={6} sm={10} xs={12}>
              <MilestoneSlider />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Milestone;
