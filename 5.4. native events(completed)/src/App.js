import React, { useState } from 'react';

const App = () => {
  const [xPos, setXpos] = useState(0);
  const [yPos, setYpos] = useState(0);
  const [marker, setMarker]= useState([]);

  const onMouseMoveHandler = (evt)=> {
      setXpos(evt.nativeEvent.offsetX);
      setYpos(evt.nativeEvent.offsetY);
  }
  const onClickHandler = (evt)=>{
      setMarker([...marker, {
        id : new Date().getTime(),
        x: evt.nativeEvent.offsetX -5,
        y: evt.nativeEvent.offsetY - 5,

      }])
  }
  return (
    <div className="container">
      <div className="stats">
       {xPos},{yPos}
        <button id="clear-btn" onClick ={() => setMarker([])}>Clear</button>
      </div>
      <div className="canvas" onMouseMove = {onMouseMoveHandler} onClick ={onClickHandler}>
        {marker.map(m => <div key= {m.id} className="dot" style={{ left: m.x, top: m.y }} />)}
      </div>
    </div>
  );
};

export default App;
