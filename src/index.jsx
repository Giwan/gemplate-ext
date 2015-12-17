require('./manifest.json');
require('./index.html');
require('./icon.png');

import React from 'react';
import ReactDOM from 'react-dom';

let Main = React.createClass({
  render() {
    return (
      <h1>React Hello</h1>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('mainapp'));
