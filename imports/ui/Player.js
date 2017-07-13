import React from 'react';

import { Players } from './../../imports/api/players';

export class Player extends React.Component {
  render() {
    let positionClassName = `player__position player__position-${this.props.player.rank}`;

    return (
      <div className="item player">
        <div className={positionClassName}>
          {this.props.player.position}
        </div>
        <div className="player__name">
           <p>{this.props.player.name}</p>
           <span className="player__stats">
              has {this.props.player.score} points.
           </span>
        </div>
        <div>
          <button onClick={() => {
              Players.update({ _id: this.props.player._id }, { $inc: { score: 1 } });
            }}>+1</button>
            <button onClick={() => {
                Players.update({ _id: this.props.player._id }, { $inc: { score: -1 } });
              }}>-1</button>
          <button onClick={() => {
              Players.remove({ _id: this.props.player._id });
            }}>DELETE</button>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
}
