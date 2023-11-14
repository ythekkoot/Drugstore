import React, { useEffect, useState } from 'react'
import './App.css'
import { Header } from './Header'
import { getData, postDrug, updateDrug } from './fetchAPI';
import DrugList  from './DrugList';
import Form from './Form';

function App() {
  const [drugStore, setDrugStore] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState({});

  useEffect(() => {
    getData().then(data => setDrugStore(data.data));
  }, [ ]);

  const handleUpdateClick = async (newDrug) => {
    setIsEditMode(false);
    const {data} = await updateDrug(newDrug);
    const updatedDrugStore = drugStore.map(drug => {
      if(drug.uuid === newDrug.uuid) {
        return {...drug, ...data};
      }
      return drug;
    }) 
    setDrugStore(updatedDrugStore);
  }

  const handleEditClick = drug => {
    setIsEditMode(true);
    setSelectedDrug(drug);
  }

  const handleAddClick = async (newDrug) => {
    const {data} = await postDrug(newDrug);
    setDrugStore(data); 
  }

  return (
    <div>
      <Header/>
      <div className="content">
        <DrugList drugStore={drugStore} handleEditClick={handleEditClick}/>
        <Form handleAddClick={handleAddClick} isEditMode={isEditMode} handleUpdateClick={handleUpdateClick} selectedDrug={selectedDrug}/>
      </div>
    </div>
  )
}

export default App
