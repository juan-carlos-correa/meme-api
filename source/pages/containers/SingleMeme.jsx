import React, { Component } from 'react';

import Meme from '../../memes/containers/Meme.jsx';
import Loading from '../../shared/components/Loading.jsx';
import Header from '../../shared/components/Header.jsx';

import styles from './SingleMeme.css';

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
    if (this.state.loading) return <Loading/>
    if (this.state.meme.success) {
      return (
        <section name="single-meme" className={styles.section}>
          <Header />
          <section>
            <Meme {...this.state.meme.result} />
          </section>

        </section>
      );
    }
  }

}

export default SingleMeme;
