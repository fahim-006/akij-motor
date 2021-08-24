import React from "react";
import styles from "./Career.module.scss";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import JobLists from "./JobLists";

const jobList = [
  { id: 1, name: "Junior Software engineer(JAVA)", link: "/" },
  { id: 2, name: "UI/UX Designer", link: "/" },
  { id: 3, name: "Mobile App Developer(Flutter)", link: "/" },
  { id: 4, name: "Project Coordinator", link: "/" },
  { id: 5, name: "Business Analyst", link: "/" },
  { id: 6, name: "Lead QA", link: "/" },
  { id: 7, name: "Documentation Expert", link: "/" },
  { id: 8, name: "Key Account Manager", link: "/" },
];

const CareerDetails = () => {
  return (
    <div className={styles.details_wrapper}>
      <Container>
        <div>
          <p>
            Innovate and work with the newest technologies in Akij Group. Be
            part of the latest and bravest. Now and change the world with new
            wave of IT and IT enabled services. <br /> <br /> Unleash your
            skills and transform the places around you. Bring the technology of
            tomorrow to the present, with the latest digital methodologies and
            design thinking by leveraging our alliances with leading companies -
            such as SAP, Oracle, Microsoft, Barracuda, Cisco, <br /> <br /> DELL
            and VMware – to drive and accelerate real business impact. You can
            implement innovative solutions to help clients drive disruption and
            stay on the edge of the digital age. If you think you belong to one
            of the very best then you have come to the right place. Here in Akij
            Group we nurture talents for tremendous growth and opportunities.
            <br /> <br /> We give you opportunities to shape the future. Akij
            Group actively seeks a diverse range of professionals to deliver
            innovative solutions that drive unprecedented benefits to our
            customers. Here are the openings, where you can join:
          </p>
        </div>
        <div className={styles.details_list}>
          <Typography variant="h6" color="initial">
            AVAILABLE JOBS:
          </Typography>
          <div>
            <JobLists data={jobList} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareerDetails;
