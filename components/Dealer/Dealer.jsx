import React from "react";
import DealerHeader from "./DealerHeader";
import ShowLocation from "./ShowLocation";
import styles from "./Dealer.module.scss";
import { Container } from "@material-ui/core";
import { district, divisions } from "./dealerData";
import DealerInformation from "./DealerInformation";

const Dealer = () => {
  return (
    <div>
      <DealerHeader />
      <div className={styles.Dealer__content}>
        <Container className={styles.locations}>
          <div>
            <div>
              <ShowLocation
                division={true}
                header="Divisions"
                data={divisions}
              />
            </div>
            <div style={{ margin: "30px 0" }}>
              <ShowLocation header="District" data={district} />
            </div>
          </div>
        </Container>

        <Container>
          <div className={styles.Dealer__information}>
            <DealerInformation />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dealer;
