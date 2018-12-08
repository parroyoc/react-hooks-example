import React from "react";
import './Summary.css';

export default function Summary({recipient}) {
  return (
    <div className="summary">
      <h2>Summary</h2>
      {JSON.stringify(recipient)}
    </div>
  );
}
