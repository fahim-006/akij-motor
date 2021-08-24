import { Container } from '@material-ui/core';
import { MultiCardForPrivate} from '../../../DUMYY_DATA/MultiCardForPrivate';
import MultiCardCard from '../../../UI/MultiCardCommercial/MultiCardCard';
import classes from './MultiCard.module.scss';

const MultiCard = () => {
  return (
    <Container>
      <hr className={classes.hr}/>
      <section className={classes.multi__card}>
      
        {MultiCardForPrivate.map((card, idx) => {
          return (
            <>
             
            <MultiCardCard
              key={idx}
              title={card.title}
              image={card.image}
              subtitle={card.subtitle}
              description={card.description}
            />
           
            </>
          );
        })}
      </section>
    </Container>
  );
};

export default MultiCard;
