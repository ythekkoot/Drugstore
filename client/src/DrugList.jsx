import React from 'react';

export default function DrugList({drugStore, handleEditClick}) {
  
  return (
    <div className="drug-list">
      <table>
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Date Added</th>
            <th></th>
          </tr>
        </thead>
        
        <tbody>
        { 
          drugStore.length !== 0 ? drugStore.map(drug => (
          <tr key={drug.uuid}>
            <td>{drug.drugName}</td>
            <td>{drug.description}</td>
            <td>{drug.quantity}</td>
            <td>{drug.dateAdded}</td>
            <button className="actionButton" onClick={() => handleEditClick(drug)} type="button">Edit</button>
          </tr>
            )) : null
        }
        </tbody>

      </table>
      
    </div>
  );
}