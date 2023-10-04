import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [numOfCards, setNumOfCards] = useState(316);

  const handleButtonClick = (value) => {
    if (value === 'low') {
      setCount(count + 1);
      setNumOfCards(numOfCards - 1);
    } else if (value === 'neutral') {
      setCount(count);
      setNumOfCards(numOfCards - 1);
    } else if (value === 'high') {
      setCount(count - 1);
      setNumOfCards(numOfCards - 1);
    }
  };

  const handleResetClick = () => {
    setCount(0);
    setNumOfCards(316);
  };


  return (
    <div
      name="home"
      className=""
      style={{
        textAlign: 'center',
        fontSize: '25px',
        background: 'linear-gradient(to bottom, blue, #66FFE5)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "REM",
      }}
    >
      <h1 className='' style={{ fontFamily: "Righteous", fontSize: "75px", color: "white" }}>Blackjack Counter Tracker</h1>
      <p style={{ fontFamily: "REM", fontSize: "50px", color: "white" }}>Count: {count}</p>
      <p style={{ fontFamily: "REM", color: "white" }}>Number of Cards left: {numOfCards}</p>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "75px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ textAlign: "center", marginRight: "10px" }}>
            <button
              onClick={() => handleButtonClick('low')}
              style={{ height: '250px', width: '250px', background: "linear-gradient(to bottom, #ff2227, #ADD8E6)", borderRadius: "10px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 1)", cursor: "pointer", fontSize: "30px" }}
            >
              Low
            </button>
            <p style={{ color: "white" }}>Cards: 2-6</p>
          </div>
          <div style={{ textAlign: "center", marginLeft: "10px", marginRight: "10px" }}>
            <button
              onClick={() => handleButtonClick('neutral')}
              style={{ height: '250px', width: '250px', background: "linear-gradient(to bottom, #ffc627, #ADD8E6)", borderRadius: "10px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 1)", cursor: "pointer", fontSize: "30px" }}
            >
              Neutral
            </button>
            <p style={{ color: "white" }}>Cards: 7-9</p>
          </div>
          <div style={{ textAlign: "center", marginLeft: "10px" }}>
            <button
              onClick={() => handleButtonClick('high')}
              style={{ height: '250px', width: '250px', background: "linear-gradient(to bottom, #04fa15, #ADD8E6)", borderRadius: "10px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 1)", cursor: "pointer", fontSize: "30px" }}
            >
              High
            </button>
            <p style={{ color: "white", }}>Cards: 10-A</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleResetClick}
        style={{ margin: "20px", padding: "10px 20px", fontSize: "20px", borderRadius: "5px", background: "linear-gradient(to bottom, #555, #888)", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
