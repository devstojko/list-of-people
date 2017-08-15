import React from 'react';

export default function Statement({ person }) {
  return (
    <div className="Statement Paper">
      <h1 className="Statement__title">Izjava</h1>
      <p className="Statement__text">
        Pod moralnom i krivičnom odgovornošću tvrdim da sam ja { person.name }, JMBG / BPG { person.jmbg } iz { person.place }-a po priznanici { person.invoice } prodao sveže { person.fruit }, { person.weight } kg Golden Fruit Trade.
      </p>
      <p className="Statement__text">
        { person.fruit } sam proizveo na teritoriji Republike Srbije na zasadima koji su navedeni u mojoj biljnoj strukturi. { person.fruit } je ubrano-a neposredno pre prodaje.
      </p>
      <p className="Statement__text">
        { person.name }, JMBG / BPG { person.jmbg }, { person.place }
      </p>
    </div>
  );
}

