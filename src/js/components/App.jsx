import React from 'react';
import Home from './Home';
import About from './About';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="wrapper" itemScope itemType="http://schema.org/Person">
        <Home />
        <About />
      </div>
    );
  }
}
