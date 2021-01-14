import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Pico from "../src/Images/Alpha6.png";
import Pico2 from "../src/Images/Alpha16.jpg";
import Pico3 from "../src/Images/Alpha10.png";
import Pico4 from "../src/Images/Alpha15.jpg";
import Pico5 from "../src/Images/Alpha17.png";
import Pico6 from "../src/Images/Alpha8.png";
import { grey } from '@material-ui/core/colors';


const CardData = [{
  Img: Pico,
  Title: "WEB EXPERT",

}, {
  Img: Pico5,
  Title: "HOW TO THINK",

},
{
  Img: Pico3,
  Title: "JavaScript",

},
{
  Img: Pico4,
  Title: "ILLUSION",

},
{
  Img: Pico2,
  Title: "TRAVEL BLOG",

},
{
  Img: Pico6,
  Title: "AUTOMATION",

},];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: '0px 1px 5px grey',

  },
  media: {
    height: 170,
    outline: 'none',
    outlineStyle: 'none',
  },
});

const Cards = (prop) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ outline: 'none', }}>
        <CardMedia
          className={classes.media}
          image={prop.Img}
          title={prop.value}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {prop.value}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            React is Javascript library.It is easy  sometime and some time it became hard.But yo
            know one thing hard roads always tend to beautiful destinations.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="mb-2">
        <NavLink variant="outlined" to='/service' className=" buton  py-1 px-3">Share</NavLink>
        <NavLink variant="outlined" to='/service' className=" buton text-truncate btoon py-1 px-3">Learn More</NavLink>
      </CardActions>
    </Card>
  );
}
export default Cards;
export { CardData };