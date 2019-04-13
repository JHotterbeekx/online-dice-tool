import React from 'react';
import DiceGrid from '../dice-grid/grid';

const dice = [
  { title: 'D6', sides: 6 },
  { title: 'D8', sides: 8 },
  { title: 'D10', sides: 10 },
  { title: 'D12', sides: 12 },

];


export default function() {
  return (
    <div>
      <DiceGrid dice={dice} />
    </div>
  );
}