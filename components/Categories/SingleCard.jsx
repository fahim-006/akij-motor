import React from 'react';
import Link from 'next/link';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SliceText from '../HOC/TextSlice/TextSlice';

const SingleCard = ({ data }) => {
  return (
    <Link href="/subCategories">
      <a>
        <Card style={{ cursor: 'pointer' }}>
          <CardMedia
            component="img"
            title={data?.title}
            image={data?.image}
            loading="lazy"
            height={200}
          />
          <CardContent>
            <Typography variant="subtitle2" color="initial">
              <SliceText number={30}>{data?.title}</SliceText>
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
};

export default SingleCard;
