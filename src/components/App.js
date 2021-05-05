import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Social from './Social'
import Joke from "./Joke";
import chuck from '../images/chucknorris.jpg'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const classes = useStyles();

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
        `https://api.chucknorris.io/jokes/random`
    );
    const data = await response.json();
    await new Promise(resolve => setTimeout(resolve, 500))
    setData(data);
    setLoading(false);
};

  useEffect(() => {
      fetchData();
  }, []);

  const newJokeOnClick = () => {
    fetchData()
  }
  return (
    <div className={classes.paper}>
        <Typography component="h1" variant="h5">
        Chuckinator
        </Typography>
      <Avatar alt="Chuck Norris" src={chuck} className={classes.avatar} />
      {loading ? <CircularProgress /> : <Joke joke={data} />}
       <Button   type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
             onClick={newJokeOnClick}>New Joke</Button>
            <Social />
       </div>
  );
}

export default App;
