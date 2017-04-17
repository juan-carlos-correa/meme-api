import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Meme extends Component {
  render() {
    return (
      <article id={`meme-${this.props.generatorID}`}>
        <h2>{this.props.displayName}</h2>
        <img src={this.props.imageUrl} />
      </article>
    )
  }
}

Meme.propTypes = {
  generatorID: PropTypes.number,
  imageID: PropTypes.number,
  displayName: PropTypes.string,
  urlName: PropTypes.string,
  totalVotesScore: PropTypes.number,
  urlNinstancesCountame: PropTypes.number,
  ranking: PropTypes.number,
  entityVotesSummary: PropTypes.object,
  imageUrl: PropTypes.string
};

export default Meme;
