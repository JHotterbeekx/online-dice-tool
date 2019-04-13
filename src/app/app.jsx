import React from 'react';
import Menu from '../menu/menu';
import DiceGrid from '../dice-grid/grid';

const diceSides = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 30, 32, 34, 48, 50, 60];
const diceSets = [
  { title: 'All', diceSides: diceSides },
  { title: 'Dungeons and Dragons', diceSides: [4, 6, 8, 10, 12, 20] },
  { title: 'Magic the Gathering', diceSides: [20] },
  { title: 'Boardgames', diceSides: [6] },
]

function sidesToDice(diceSides) {
  return diceSides.map(sides => ({
    title: `D${sides}`,
    sides: sides,
  }));  
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeSet: 'All' }
  }

  
  onMenuSelected(title) {
    this.setState({ activeSet: title });
  }

  render() {
    return (
      <div>
        <Menu menuItems={diceSets.map(set => set.title)} onMenuSelected={(title) => this.onMenuSelected(title)} />
        <DiceGrid dice={sidesToDice(diceSets.find(set => set.title === this.state.activeSet).diceSides)} />
      </div>
    );
  }
}