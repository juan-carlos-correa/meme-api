import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Meme extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id={`meme-${this.props.generatorID}`}>
        <Link to={`/meme/${this.props.generatorID}`}>
          <h2>{this.props.displayName}</h2>
        </Link>
        <Link to={`/meme/${this.props.generatorID}`}>
          <img src={this.props.imageUrl} />
        </Link>
        <p>Total votes: {this.props.totalVotesScore}</p>
        <p>Ranking: {this.props.ranking}</p>
      </article>
    )
  }
}

Meme.propTypes = {
  generatorID: PropTypes.number,
  imageID: PropTypes.number,
  displayName: PropTypes.string,
  urlName: PropTypes.string,
  ranking: PropTypes.number,
  entityVotesSummary: PropTypes.object,
  imageUrl: PropTypes.string
};

export default Meme;
