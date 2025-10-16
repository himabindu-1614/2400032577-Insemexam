import React from 'react';


export default function Welcome({ name }) {
  return (
    <div className="welcome">
      <h2 className="welcome-title">Welcome, {name}!</h2>
      <p className="welcome-sub">Glad to see you on the student dashboard.</p>
    </div>
  );
}
