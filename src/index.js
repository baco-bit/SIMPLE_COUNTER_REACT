import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from "prop-types";

function SimpleCounter(props) {

  return (
      <div className="boxCounter">
        <div className="titulo">
          <h3>Proyecto de contador simple con ReactJS para 4Geeks Academy</h3>
        </div>
        <div className="bodyCounter">
          <div className="iconCounter">
            <i className="far fa-clock"></i>
          </div>
          <div className="six">{props.digitoSeis % 10}</div>
          <div className="five">{props.digitoCinco % 10}</div>
          <div className="four">{props.digitoCuatro % 10}</div>
          <div className="three">{props.digitoTres % 10}</div>
          <div className="two">{props.digitoDos % 10}</div>
          <div className="one">{props.digitoUno % 10}</div>
        </div>
      </div>
  );

};

SimpleCounter.propTypes = {
  digitoSeis: PropTypes.number,
  digitoCinco: PropTypes.number,
  digitoCuatro: PropTypes.number,
  digitoTres: PropTypes.number,
  digitoDos: PropTypes.number,
  digitoUno: PropTypes.number,

}; 


let counter = 0;
setInterval(function () {

  const six = Math.floor(counter / 100000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);

  counter++;



  ReactDOM.render(
      <SimpleCounter 
      digitoUno={one} 
      digitoDos={two} 
      digitoTres={three}
      digitoCuatro={four}
      digitoCinco={five}
      digitoSeis={six}
      />,
    document.getElementById('root')
  );
}, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

