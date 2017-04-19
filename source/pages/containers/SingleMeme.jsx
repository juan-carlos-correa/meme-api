import React, { Component } from 'react';

import Meme from '../../memes/containers/Meme.jsx';

import api from '../../api.js';

class SingleMeme extends Component{
  constructor(props) {
    super(props);

    this.state = ({
      meme: {},
      loading: true,
    });
  }

  async componentDidMount() {
    const meme = await api.memes.getSingle(this.props.match.params.id);

    this.setState({
      meme,
      loading: false,
    })
  }

  render() {
    console.log(this.state.meme)
    if (this.state.meme.success) {
      return (
        <section name="single-meme">
          <h2>Meme {this.state.meme.displayName}</h2>

          <section>
            <Meme {...this.state.meme.result} />
          </section>
          <p>{this.state.meme.result.description}</p>
        </section>
      );
    } else {
      return (
        <h1>Loading... </h1>
      )
    }
  }

}

export default SingleMeme;
