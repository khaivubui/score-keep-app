import React from 'react';

export class TitleBar extends React.Component {
  render() {
    return (
      <div className="title-bar">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired
}
