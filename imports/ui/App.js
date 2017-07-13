import React from 'react';

import { TitleBar } from './TitleBar';
import { AddPlayer } from './AddPlayer';
import { PlayerList } from './PlayerList';

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TitleBar title="Score Keep"/>
        <PlayerList/>
        <AddPlayer/>
      </div>
    );
  }
}
