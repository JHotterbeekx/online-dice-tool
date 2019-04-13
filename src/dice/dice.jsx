import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactDiceRoller from 'react-dice-roller';

const styles = {
  card: {
    maxWidth: 125,
  },
}

function Dice({ classes, title, sides }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <ReactDiceRoller sides={sides} />
      </CardContent>
    </Card>
  );
}

Dice.propTypes = {
  title: PropTypes.string.isRequired,
  sides: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dice);