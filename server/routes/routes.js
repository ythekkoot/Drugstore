const express = require('express');
const router = express();
const Database = require('../database/db');

const drugStore = [  
            {uuid: 1, drugName: 'Lipitor', dateAdded: '2023-02-28', description: "Lipitor is a popular statin drug used to lower cholesterol levels and reduce the risk of heart attack and stroke.", quantity: 5}, 
            {uuid: 2, drugName: 'Advil', dateAdded: '2021-01-01', description: "Advil is a widely used over-the-counter pain reliever that is effective in treating mild to moderate pain, inflammation, and fever.", quantity: 9},
            {uuid: 3, drugName: 'Zoloft', dateAdded: '2023-01-01', description: "Zoloft is an antidepressant medication commonly prescribed for the treatment of depression, anxiety, and other mood disorders.", quantity: 8},
            {uuid: 4, drugName: 'Tylenol', dateAdded: '2019-01-01', description: "Tylenol is a commonly used over-the-counter pain reliever and fever reducer that is generally considered safe when taken as directed.", quantity: 2},
            {uuid: 5, drugName: 'Paracetamol', dateAdded: '2017-01-01', description: "A widely used pain reliever and fever reducer with a low risk of side effects, commonly used for headaches, menstrual cramps, and other mild to moderate pain.", quantity: 4}
];
const db = new Database(drugStore);

// router.get('/', (req, res) => {
//    res.send("Hello..!");
//  })

router.get('/drugStore', (req, res) => {
   res.status(200).json({data : drugStore});
})

router.get('/readDrug/:uuid', (req, res) => {
   try {
      const uuid = req.params.uuid;
      const drug = db.displayDrug(+uuid);
      res.status(200).json({data : drug});
   } catch(error) {
      res.status(404).send(error.message);
   }
})

router.post('/addDrug', (req, res) => {
   try {
     const data = req.body;
     if(Object.keys(data).length !== 0) {
       const drugStore = db.createDrug(data);
       res.status(200).json({ message: 'New drug added successfully', data: drugStore });
     } else {
       res.status(400).json({ message: 'Drug name required!', data: drugStore });
     }
   } catch(error) {
     res.status(404).json({message: error.message});
   }
 
})

router.put('/updateDrug/:uuid', (req, res) => {
   const uuid = req.params.uuid;
   const newData = req.body;
   try {
      const drug = db.updateDrug(+uuid, newData);
      res.status(200).json({ message: 'Drug updated successfully', data: drug });
   }
   catch(error) {
       res.status(404).send(error.message);
   }

});

router.delete('/deleteDrug/:uuid', (req, res) => {
   const uuid = req.params.uuid;
   try {
      // const isDeleted = db.deleteDrug(+uuid);
      const drugStore = db.deleteDrug(+uuid);
      res.status(200).json({ message: 'Drug deleted successfully', data: drugStore });
   }
   catch(error) {
       res.status(404).send(error.message);
   }

});


module.exports = router;
