import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { string } from 'prop-types';

PrivateHeader.propTypes = {
    title: string
}

PrivateHeader.defaultProps = {
    title: "Spisak lica"
}

export default function PrivateHeader({title}) {
    return (
      <div className="PrivateHeader" >
        <h1 className="PrivateHeader__title" >{title}</h1>
        <button 
            className="btn PrivateHeader__logout" 
            onClick={() => Accounts.logout()}>logout</button>
      </div>
    );
}