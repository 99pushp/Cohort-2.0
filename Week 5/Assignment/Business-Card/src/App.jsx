import React from 'react';
import './App.css'; // Import your stylesheet

function CardComponent(props) {
  return (
    <div className="card">
      <div className="name">{props.name}</div>
      <div className="short-description">{props.shortdescription}</div>

      <div className="interests">
        {props.interests.map((interest, index) => (
          <div key={index}>{interest}</div>
        ))}
      </div>

      <div className="social-buttons">
        <button onClick={() => window.open(props.Linkedin)}>LinkedIn</button>
        <button onClick={() => window.open(props.twitter)}>Twitter</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <CardComponent
        name={'mr xyz'}
        shortdescription={'Web Developer'}
        interests={['Stock Trading', 'Painting', 'Music Production']}
        Linkedin={'https://www.linkedin.com'}
        twitter={'https://www.twitter.com'}
      />
    </>
  );
}

export default App;