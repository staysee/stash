import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import './components/Main/Main.css';

function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <FontAwesomeIcon icon={faExclamation} />
      <p>Oops. Page Not Found!</p>
    </div>
  );
}

export default NotFoundPage;
