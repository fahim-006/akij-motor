import { MdSecurity } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import classes from './PrivacyPolicyCard.module.css';

const PrivacyPolicyCard = (props) => {
  return (
    <>
      <div className="flex items-center py-3 overflow-hidden ">
        {props.topic && <MdSecurity />}
        <Fade left>
          <p className={classes.topic}>{props.topic}</p>
        </Fade>
      </div>

      <p className={classes.description}>{props.description}</p>
    </>
  );
};

export default PrivacyPolicyCard;
