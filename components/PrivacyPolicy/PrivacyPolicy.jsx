import { Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import privacyList from '../../DUMYY_DATA/privacy-policy';
import PrivacyPolicyCard from '../../UI/PrivacyPolicyCard/PrivacyPolicyCard';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <>
      <div className={styles.privacy__wrapper}>
        <Fade bottom>
          <Typography variant="h4" color="initial">
            Privacy of AKIJ Motors
          </Typography>
        </Fade>
      </div>

      <div className="container mx-auto">
        <div className={styles.privacy__policy}>
          {privacyList.map((privacy, i) => {
            return (
              <PrivacyPolicyCard
                key={i}
                topic={privacy.topic}
                description={privacy.description}
                headline={privacy.headline}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
