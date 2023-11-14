import { useContext, useEffect, useState } from 'react'


export default function Form({handleAddClick, isEditMode, handleUpdateClick, selectedDrug}) {
    const [newDrug, setNewDrug] = useState({drugName:"",description:"",quantity:0});
    const handleNewName = ({target}) => setNewDrug({ ...newDrug, drugName: target.value })
    const handleNewDesc = ({target}) => setNewDrug({ ...newDrug, description: target.value })
    const handleNewQuantity = ({target}) => setNewDrug({ ...newDrug, quantity: target.value })

    useEffect(() => {
        setNewDrug(selectedDrug)
    }, [selectedDrug]);
    
    return (
        <div className="drug-input">
            <label htmlFor="drugName">Drug Name</label>
            <input onChange={handleNewName} type="text" id="drugName" name="drugName" value={newDrug.drugName ?? ""}/>
            <label htmlFor="description">Description</label>
            <input onChange={handleNewDesc} type="text" id="description" name="description" value={newDrug.description ?? ""}/>
            <label htmlFor="quantity">Quantity</label>
            <input onChange={handleNewQuantity} type="text" id="quantity" name="quantity" value={newDrug.quantity ?? "" }/>  

            {isEditMode ? (
                <button className="actionButton" 
                        onClick={ () => {
                            handleUpdateClick(newDrug)
                            setNewDrug({ drugName: '', description: '', quantity: '' })
                        }} type="button">Update</button>
                ) : (
                <button className="actionButton" 
                        onClick={ () => {
                            handleAddClick(newDrug)
                            setNewDrug({ drugName: '', description: '', quantity: '' })
                        }} type="button">Add</button>
            )}
        </div>
    )
}
