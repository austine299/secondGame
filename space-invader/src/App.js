import React, {Component} from 'react';

class App extends Component {
  
  render(){
    return (
      <div className="game-area">

        <div className="enemy">
          <div ></div>
        </div>


        <div className="player">
          <div className="player-gun" style={{top:0, left:'2'}}></div>
          <div className="playr-dot" style={{top:0, left:0}}></div>
          <div className="player-dot" style={{top:0, left:'2%'}}></div>
          <div className="player-dot" style={{top:0, left:'4%'}}></div>
          <div className="player-dot" style={{top:0, left:'6%'}}></div>
          <div className="player-leg" style={{top:0, left:'4%'}}></div>
          <div className="player-leg" style={{top:0, left:'8%'}}></div>
        </div>
      </div>
    
    );
  }
}

export default App;
