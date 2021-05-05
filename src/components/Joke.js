import React from 'react'
import {formatDistanceToNow} from 'date-fns'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Joke = ({ joke }) => {
  const classes = useStyles();
  
  if(!joke) return null
  
  const {value, created_at} = joke
  
  const createdAt = created_at.substring(0,10)
  const formattedDate = formatDistanceToNow(new Date(createdAt), { addSuffix: true })
  return (
    <Card className={classes.root}>
       <CardContent>
     <Typography className={classes.title} color="textSecondary" gutterBottom>
        Joke of the day
        </Typography>
        <Typography variant="body2" component="p">
          {value}
        </Typography>
        </CardContent>
        <CardActions>
        <strong>Created:</strong> <span>{formattedDate}</span>
      </CardActions>
    </Card>
  )
}

export default Joke
