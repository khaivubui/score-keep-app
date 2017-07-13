import React from 'react';

import { Players } from './../../imports/api/players';

export class AddPlayer extends React.Component {
  handleSubmit(event) {
    let playerName = event.target.playerName.value.trim();
    event.preventDefault();
    if(playerName) {
      Players.insert({
        name: playerName,
        score: 0,
      });
    }
    event.target.playerName.value = '';
  }

  render() {
    return (
      <div className="add-player">
        <form className="form" onSubmit={this.handleSubmit} autoComplete="off">
          <input className="form__input" type="text" name="playerName" placeholder="Enter player name..."/>
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}
