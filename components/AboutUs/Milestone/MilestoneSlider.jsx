import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "15px",
  },
  slider: {
    color: "#ccebff",
    height: "4px",
  },
}));

const marks = [
  {
    value: 0,
    label: "2015",
  },
  {
    value: 25,
    label: "2018",
  },
  {
    value: 50,
    label: "2020",
  },
  {
    value: 80,
    label: "2021",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function TrackInvertedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        getAriaValueText={valuetext}
        defaultValue={0}
        marks={marks}
        className={classes.slider}
      />
    </div>
  );
}

// .MuiSlidermarkLabelActive {
//     color: #fff !important;
// }
