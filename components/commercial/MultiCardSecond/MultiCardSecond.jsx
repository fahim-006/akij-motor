import { Container } from '@material-ui/core';
import { MultiCardForCommercialSecond } from '../../../DUMYY_DATA/MultiCardCommercialSecond';
import MultiCardCard from '../../../UI/MultiCardCommercial/MultiCardCard';
import classes from './MultiCardSecond.module.scss';

const MultiCardSecond = () => {
  return (
    <Container>
     
      <section className={classes.multi__card}>
      <hr/>
        {MultiCardForCommercialSecond.map((card, idx) => {
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

export default MultiCardSecond;
