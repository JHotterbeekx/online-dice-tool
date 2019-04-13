import React from 'react';
import Dice from '../dice/dice';

export default function() {
  return (
    <div>
      <Dice title="D6" />
      <Dice title="D8" />
      <Dice title="D10" />
    </div>
  );
}