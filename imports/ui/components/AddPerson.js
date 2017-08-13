import React, { Component } from 'react';

export default function AddPerson({
  onSubmit, 
  handleInputChange,
  clearInputFields,
  ...props  
}) {
  
  const {
    name,
    upin,
    place,
    invoice,
    fruitWeight,
    fruitName
  } = props;

  return (
    <div className="AddPerson">
      <h3>Poljoprivrednik</h3>

      <form className="AddPerson__form" onSubmit={onSubmit}>
        <label>
          Ime i prezime:
          <input 
            type="text"
            onChange={handleInputChange}
            name="name"
            value={name}
          />
        </label>

        <label>
          JMBG / BPG
          <input 
            type="text"
            onChange={handleInputChange}
            name="upin"
            value={upin}
          />
        </label>

        <label>
          Mesto:
          <input 
            type="text"
            onChange={handleInputChange}
            name="place"
            value={place}
          />
        </label>

        <label>
          Br. priznanice (računa):
          <input 
            type="text"
            onChange={handleInputChange}
            name="invoice"
            value={invoice}
          />
        </label>

        <label>
          Težina:
          <input 
            type="text"
            onChange={handleInputChange}
            name="fruitWeight"
            value={fruitWeight}
          />
        </label>

        <label>
          Voće:
          <input 
            type="text"
            onChange={handleInputChange}
            name="fruitName"
            value={fruitName}
          />
        </label>

        <button>Dodaj poljoprivrednika</button>
        <button onClick={clearInputFields}>Obrisi sva polja</button>
      </form>
    </div>
  );
}