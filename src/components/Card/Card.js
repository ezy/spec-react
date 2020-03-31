import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { makeSummary } from '../../helpers/make-summary';

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      margin: theme.spacing(1),
      maxWidth: 300,
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1, 0, 0, 0),
      },
    },
    media: {
      height: 140,
    },
  })
);

export const ArticleCard = (props) => {
  const { id, title, body } = props;
  const summary = makeSummary(body, 50, true);

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={`/post/${id}`}>
          <CardMedia
            className={classes.media}
            image={`${process.env.PUBLIC_URL}/img/jf.jpg`}
            title="Jelly"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {makeSummary(title, 40, true)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {summary}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
