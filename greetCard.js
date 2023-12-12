import React, { Component } from 'react';

class GreetCard extends Component {
  render() {
    return (
      <div className="birthdayCard">
        <div className="cardFront">
          <h3 className="happy">Happy Birthday</h3>
          <div className="balloons">
            <div className="balloonsOne" />
            <div className="balloonsTwo" />
            <div className="balloonsThree" />
            <div className="balloonsFour" />
          </div>
        </div>
        <div className='cardInside'>
          <h3 className='back'>Happy Birthday to You!</h3>
          <p className='wish'>Dear love,</p>
          <p className='wish'>
            Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.
          </p>
          <p className="name">Nikitha</p>
        </div>
      </div>
    );
  }
}

export default GreetCard;
