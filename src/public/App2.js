import React, { Fragment, useState } from "react";

//creating Square component
function Square() {
  return <button className="square">X</button>;
}

// creating base Board component to display squares
export default function Board() {
  return (
    <Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </Fragment>
  );
}
