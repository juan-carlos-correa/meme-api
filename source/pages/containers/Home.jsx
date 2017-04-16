import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Meme from '../../memes/containers/Meme.jsx';

import api from '../../api.js';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memes: [],
      loading: true,
    }
  }
  async componentDidMount() {
    const memes = await api.memes.getMemes();
    this.setState({
      memes,
      loading: false,
    })
  }

  render() {
    console.log(this.state.memes.success);
    return (
      <section name="Home">
        <h1>Welcome to Meme-Api</h1>
        <section>
          {this.state.loading && (
            <h2>Loading memes...</h2>
          )}
          {
            this.state.memes.success && (
              this.state.memes.data.memes
                .map(meme => <Meme key={meme.id} {...meme} />)
            )
          }
        </section>
      </section>
    );
  }
}

export default Home
