import React from 'react';
import FlipMove from 'react-flip-move';

import { Player } from './Player';
import { Players, calculatePlayerPosition } from './../api/players'

export class PlayerList extends React.Component {
  renderPlayers() {
    let players = Players.find({}, {
      sort: { score: -1 }
    }).fetch();
    let positionedPlayers = calculatePlayerPosition(players);
    return positionedPlayers.map((player) => {
      return <Player key={player._id} player={player}/>
    })
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
};
