const moment = require('moment');
const _ = require('lodash');

function getDate(date) {
    return moment(date).format('YYYY-MM-DD');
}

class Database {
  constructor(drugStore) {
    this.drugStore = drugStore;
  }

  createDrug(data) {
    try {
      if(data.drugName === '' || data.description === '' || data.quantity === null) {
          throw new Error('No drug name..')
      }
      data.uuid = this.drugStore.length + 1;
      data.dateAdded = getDate(Date.now());
      this.drugStore.push(data);
      return this.drugStore;
    } catch(error) {
        throw error;
    }
  }

  displayDrug(uuid) {
    const drug = _.find(this.drugStore, drug => drug.uuid === uuid)
    if(!drug) throw new Error(JSON.stringify({ message : 'Drug not found'} ));
    if(drug.drugName !== '') {
      return drug;
    } 
    return {};
  }

  updateDrug(uuid, newData) {
    let drug = _.find(this.drugStore, drug => {
      return drug.uuid === uuid
    })
    if(!drug) throw new Error(JSON.stringify({message : 'Drug not found'}));
    if(drug.quantity > 0) {
      drug = {...drug, ...newData};
      return drug;
    } 
    return {};
  }

  deleteDrug(uuid) {
    const drug = _.find(this.drugStore, drug => drug.uuid === uuid)
    if(!drug) throw new Error(JSON.stringify({message : 'Drug not found'}));

    let index = this.drugStore.indexOf(drug);
    console.log("🚀 ~ file: db.js:51 ~ Database ~ deleteDrug ~ index:", index);
    
    if(index !== -1) {
      this.drugStore.splice(index, 1);
      return this.drugStore;
    } else 
    return {};
  }

}

module.exports = Database;
