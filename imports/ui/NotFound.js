import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="BoxedView" >
      <div className="BoxedView__box" >
        <h1>Page Not Found</h1>
        <p>Requested page not found.</p>
        <Link to="/" >RETURN HOME</Link>
      </div>
    </div>
  );
}