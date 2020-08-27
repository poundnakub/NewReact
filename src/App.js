import React, {useState} from 'react';
// import React from 'react';
import logo from './logo.svg';
import {Des,Name,Des2} from './des.js';
// import Aaaa from './des.js';
// import {Des2} from './des.js';
import { Button } from 'reactstrap';

import './App.css';

function App() {
  const [Test, setTest] = useState("hello pound")
  return (
    // <div style={{
    //   'backgroundColor':'black'
    // }}>
    <div>
      {/* <Des />
      <Des name="danger"/>
      <Des3 /> */}
      <Name />
      <Des2 />
      {/* <Button color="danger">Danger!</Button> */}
    </div>
  );
}

export default App;
