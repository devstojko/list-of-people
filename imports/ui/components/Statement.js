import React from 'react';

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

  console.log(renderInvoices);


  return (
    <div className="Statement Paper">
      <h1 className="Statement__title">Izjava</h1>
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
  );
}

