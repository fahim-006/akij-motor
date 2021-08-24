import { Card, CardContent } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import classes from './MissionCard.module.scss';

const MissionCard = (props) => {
  return (
    <Card>
      <CardContent>
        <div className={classes.mission__card}>
          <Fade left>
            <h1>{props.title}</h1>
          </Fade>
          <div className={classes.underline}></div>
          <p>{props.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
