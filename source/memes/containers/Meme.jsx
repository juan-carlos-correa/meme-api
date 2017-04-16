import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Meme extends Component {
  render() {
    return (
      <article id={`meme-${this.props.id}`}>
        <h2>{this.props.name}</h2>
        <img src={this.props.url} />
      </article>  
    )
  }
}

Meme.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Meme;
