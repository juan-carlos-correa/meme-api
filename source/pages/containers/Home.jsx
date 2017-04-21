import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Meme from '../../memes/containers/Meme.jsx';
import Loading from '../../shared/components/Loading.jsx';
import Header from '../../shared/components/Header.jsx';

import api from '../../api.js';

class Home extends Component {
  constructor(props) {
   super(props)

   this.state = {
     page: 1,
     memes: [],
     loading: true,
   }
   this.handleScroll = this.handleScroll.bind(this)
 }

 async componentDidMount() {
     const memes = await api.memes.getMemes(this.state.page)

     this.setState({
       memes,
       page: this.state.page + 1,
       loading: false,
     })

     window.addEventListener('scroll', this.handleScroll)
   }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    // Si esta cargando terminar la funcion
    if (this.state.loading) return null;

    const scrolled  = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.clientHeight;

    if (!(scrolled + viewportHeight + 300 >= fullHeight )) {
      return null
    }

    this.setState({ loading:true }, async () => {
      try {
        const memes = await api.memes.getMemes(this.state.page);
        this.setState({
          memes: {
            success: memes.success,
            warning: memes.warning,
            result: this.state.memes.result.concat(memes.result),
          },
          loading: false,
          page: this.state.page + 1,
        })
      } catch (e) {
        console.log(e);
        this.setState({loading: false});
      }
    })
  }

  render() {
    return (
      <section name="Home">
        <Header />
        <h1>Welcome to Meme-Api</h1>
        <section>
          {this.state.loading && (
            <Loading />
          )}
          {
            this.state.memes.success && (
              this.state.memes.result
                .map(meme => <Meme key={meme.generatorID} {...meme} />)
            )
          }
        </section>
      </section>
    );
  }
}

export default Home
