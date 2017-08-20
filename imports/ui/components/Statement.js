import React from 'react';

import Paper from './Paper';

export default function Statement(props) {
 
  

  const {
    name,
    invoice,
    upin,
    place,
    fruitName,
    fruitWeight,
    firmName
  } = props.person;

  const renderInvoices = invoice.join(', ');


  return (
    <Paper>
      <div className="Statement">
        <h2 className="Statement__title">Izjava</h2>
        <p className="Statement__text">
          Pod moralnom i krivičnom odgovornošću tvrdim da sam ja <b>{name}</b>, 
          JMBG / BPG <b>{upin}</b> iz <b>{place}</b>-a po priznanici <b>{renderInvoices}</b> prodao sveže <b>{fruitName}</b> 
          u kolicini od <b>{fruitWeight}</b> neto kg <b>{firmName}</b>.
        </p>
        <p className="Statement__text">
          <b>{fruitName}</b> sam proizveo na teritoriji Republike Srbije na 
          zasadima koji su navedeni u mojoj biljnoj strukturi. 
          <b>{fruitName}</b> je ubrano-a neposredno pre prodaje.
        </p>
        <p className="Statement__text">
          <b>{name}</b>, JMBG / BPG <b>{upin}</b>, <b>{place}</b>
        </p>
      </div>
    </Paper>
  );
}

