import './App.css';
import Clock from './Components/time';
import React from 'react';

import BackgroundSlider from './lib';

import P0 from './Images/WP/A.Pink/P0.jpeg'
import P1 from './Images/WP/A.Pink/P1.jpeg'
import P2 from './Images/WP/A.Pink/P2.jpeg'

import P3 from './Images/WP/B.Purple/P0.jpeg'
import P4 from './Images/WP/B.Purple/P1.jpeg'
import P5 from './Images/WP/B.Purple/P3.jpeg'

import P6 from './Images/WP/C.Blue/B1.jpeg'
import P7 from './Images/WP/C.Blue/B2.jpeg'
import P8 from './Images/WP/C.Blue/B3.jpeg'

import P9 from './Images/WP/D.Green/G1.jpeg'
import P10 from './Images/WP/D.Green/G2.jpeg'
import P11 from './Images/WP/D.Green/G3.jpeg'

import P12 from './Images/WP/E.Yellow/Y1.jpeg'
import P13 from './Images/WP/E.Yellow/Y2.jpeg'
import P14 from './Images/WP/E.Yellow/Y3.jpeg'

import P15 from './Images/WP/F.Orange/O1.jpeg'
import P16 from './Images/WP/F.Orange/O2.jpeg'
import P17 from './Images/WP/F.Orange/O3.jpeg'

import P18 from './Images/WP/G.Red/R1.jpeg'
import P19 from './Images/WP/G.Red/R2.jpeg'
import P20 from './Images/WP/G.Red/R3.jpeg'


function App() {

  return (

    <div className="App">
        <Clock />
        <BackgroundSlider
            images={[P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]}
              duration={30} transition={4} />
    </div>
  );
}

export default App;
