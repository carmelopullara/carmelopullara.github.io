import React from 'react';
import SocialMenu from './SocialMenu';
import '../particleground.js';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Carmelo Pullara',
    }
  }

  componentDidMount() {
    particleground(document.getElementById('main-canvas'), {
      dotColor: '#989072',
      lineColor: 'transparent',
      particleRadius: 2.5,
      density: 8000
    });
  }

  render() {
    let letters = [];
    
    for (let i = 0; i < this.state.name.length; i++) {
      let toAdd = {id: i, letter: this.state.name[i]};
      letters.push(toAdd);
    }

    return (
      <header>
        <div className="main-block">
          <h6 className="main-block__intro">
            <span>Hi, my name is:</span>
          </h6>
          <div className="main-block__container">
            <div className="borders">
              <div className="borders__line-top"></div>
              <div className="borders__line-right"></div>
              <div className="borders__line-bottom"></div>
              <div className="borders__line-left"></div>
            </div>
            <h1 itemProp="name" className="main-block__name">
              {letters.map((elem) => {
                return <span className={'letter-' + (elem.id + 1)} key={elem.id}>{elem.letter}</span>;
              })}
            </h1>
          </div>
          <h6 className="main-block__description">
            <span itemProp="jobTitle">Front-End Developer.</span>
            <span>JavaScript Addicted.</span>
          </h6>
          <SocialMenu links={socials} />
        </div>
        <div id="main-canvas"></div>
      </header>
    );
  }
}

const socials = [
  {name: 'twitter', url: 'https://twitter.com/carmelopullara'},
  {name: 'github', url: 'https://github.com/carmelopullara'},
  {name: 'linkedin', url: 'http://linkedin.com/in/carmelopullara'},
  {name: 'gplus', url: 'https://google.com/+carmelopullara'},
  {name: 'angellist', url: 'https://angel.co/carmelo'},
  {name: 'stackoverflow', url: 'http://stackoverflow.com/users/2352191/'},
];
