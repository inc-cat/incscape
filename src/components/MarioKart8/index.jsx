import { useState } from 'react';
import MarioKart8 from './MarioKart8Scores';
import MK8Points from './MarioKartPoints';

export default function MK8() {
  const [graph, toggleGraph] = useState(false);
  return (
    <div>
      <button
        onClick={function () {
          toggleGraph(!graph);
        }}
      >
        {graph ? 'Points' : 'Results and average'}{' '}
      </button>
      {graph ? <MarioKart8 /> : <MK8Points />}
    </div>
  );
}
