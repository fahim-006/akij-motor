import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";

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
  BlogButton: {
    backgroundColor: "#FA5D5E",
    marginTop: "20px",
    borderTopLeftRadius: "30px",
  },
}));

const BlogCard = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        component="img"
        image={data?.image}
        height={500}
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
            {data?.description}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            className={classes.BlogButton}
          >
            Reading Continue
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default BlogCard;
