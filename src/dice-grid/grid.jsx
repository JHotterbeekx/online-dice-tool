import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dice from '../dice/dice';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
}

function DiceGrid({ classes, dice, title }) {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid
          container
          spacing={16}
          alignItems='center'
          direction='row'
          justify='center'
        >
          {dice.map(die => (
            <Grid key={`${title}-${die.sides}-${die.title}`} item>
              <Dice title={die.title} sides={die.sides} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

DiceGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  dice: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      sides: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default withStyles(styles)(DiceGrid);