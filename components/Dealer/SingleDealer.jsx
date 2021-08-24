import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 200,
  },
  flexIcon: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  iconMargin: {
    marginRight: "6px",
  },
}));

const SingleDealer = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        component="img"
        image={data?.image}
        height={300}
        alt={data?.title}
        loading="lazy"
        objectFit="contain"
        layout="fill"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h5">
            {data?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.flexIcon}
          >
            <span className={classes.iconMargin}>
              <HomeIcon />
            </span>{" "}
            {data?.address}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.flexIcon}
          >
            <span className={classes.iconMargin}>
              <EmailIcon />
            </span>{" "}
            {data?.email}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.flexIcon}
          >
            <span className={classes.iconMargin}>
              <PhoneIcon />
            </span>{" "}
            {data?.phone}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default SingleDealer;
