import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange(value) {
    this.setState({ value });
    this.props.onMenuSelected(this.props.menuItems[value]);
  };
  
  render() {
    const { classes, menuItems } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={(e, v) => this.handleChange(v)}>
            {menuItems.map(menuItem => (
              <Tab key={menuItem} label={menuItem} />
            ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMenuSelected: PropTypes.func.isRequired,
}

export default withStyles(styles)(Menu);