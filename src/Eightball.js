import React, { useState } from 'react';
import "./Eightball.css";

const EIGHTBALL_DEFAULT = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/**
 * Eightball component renders a random string response and background color
 * for the eightball.
 *
 * Props:
 * - answers - And array of objects, with key-value pairings of { msg, color },
 *  each with string values.
 *
 * States:
 * - color - String
 * - message - String
 *
 * App -> Eightball
*/

function Eightball({ answers=EIGHTBALL_DEFAULT }) {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question.");

  function handleClick(evt) {
    const randIdx = Math.floor(Math.random()*answers.length);
    setColor(answers[randIdx].color);
    setMessage(answers[randIdx].msg);
  }

  const myStyles = {
    backgroundColor: color
  }
  return (
    <div className="Eightball">
      <button className="Eightball-ball" style={myStyles} onClick={handleClick}>
        <p className="Eightball-message"> {message} </p>
      </button>
    </div>
  )
};


export default Eightball;