import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Meme.css';

class Meme extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id={`meme-${this.props.generatorID}`} className={styles.meme}>
        <h2 className={styles.title}>
          <Link to={`/meme/${this.props.generatorID}`}>
            {this.props.displayName}
          </Link>
        </h2>
        <Link to={`/meme/${this.props.generatorID}`}>
          <img src={this.props.imageUrl} />
        </Link>
        <p>
          Total votes: <span className={styles.score}>{this.props.totalVotesScore}</span>
        </p>
        <p>
          Ranking: <span className={styles.score}>{this.props.ranking}</span>
        </p>
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
