import React from 'react';
import ReactDOM from 'react-dom';
import MotelActions from './actions/MotelActions';
import MotelGrid from './components/Motelgrid';

setInterval(function(){
  MotelActions.fetchlist();
},5000);

ReactDOM.render(<MotelGrid />, document.getElementById('app'));
