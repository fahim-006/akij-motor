import { CardMedia, Card } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import styles from './Teams.module.scss';
import { CardContent, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from 'next/link';

const SingleCard = ({ data }) => {
  return (
    <Card className={styles.team__content}>
      <div className={styles.team__wrapper}>
        <CardMedia
          component="img"
          image={data.image}
          width={'100%'}
          height={400}
          alt={data.name}
          style={{ maxHeight: '200px' }}
        />

        <div className={styles.team_info}>
          <CardContent>
            <Typography
              variant="h6"
              color="initial"
              className={styles.team_name}
            >
              {data.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="initial"
              className={styles.team_position}
            >
              {data.position}
            </Typography>
            <Typography
              variant="subtitle2"
              color="initial"
              className={styles.team_email}
            >
              {data.email}
            </Typography>
          </CardContent>
          <div className={styles.icon_position}>
            <span>
              <Link href="https://www.facebook.com/AkijMotors">
                <a target="_blank">
                  <LinkedInIcon style={{ fill: '#0A66C2', fontSize: '30px' }} />
                </a>
              </Link>
            </span>
          </div>
        </div>

        {/* <Image
          src={data.image}
          alt={data.name}
          height={400}
          width={600}
          layout="responsive"
          objectFit="contain"
          loading="lazy"
        /> */}
      </div>
    </Card>
  );
};

export default SingleCard;
