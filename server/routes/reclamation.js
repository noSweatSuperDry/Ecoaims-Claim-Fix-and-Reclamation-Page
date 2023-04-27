const router = require('express').Router();
let Reclamation = require('../models/reclamation.model');


router.route('/').get((req, res)=>{
    Reclamation.find().then(Reclamation=>req.json(Reclamation)).catch(err=>res.statusCode(400).json('Error: '+ err));
});

router.route('/add').post((req, res)=>{
    const issueDate = req.body.issueDate;
    const partName = req.body.partName;
    const deviceSerialNumber = req.body.deviceSerialNumber;
    const howMany = req.body.howMany;
    const lemonSoftIssueNumber = req.body.lemonSoftIssueNumber;
    const electricalComponentType = req.body.electricalComponentType;
    const mechanicalComponentType = req.body.mechanicalComponentType;
    const information = req.body.information;
    const causeKnownR = req.body.causeKnownR;
    const whatIsTheCauseR = req.body.whatIsTheCauseR;
    const conclusionR = req.body.conclusionR;
    const repairedChangedComponent = req.body.repairedChangedComponent;
    const userNameR = req.body.userNameR;

  
    const newReclamation = new Reclamation({
    
      issueDate,
      partName,
      deviceSerialNumber,
      howMany,
      lemonSoftIssueNumber,
      electricalComponentType,
      mechanicalComponentType,
      information,
      causeKnownR,
      whatIsTheCauseR,
      conclusionR,
      repairedChangedComponent,
      userNameR,
    });
newReclamation.save()
  .then(()=>res.json('Reclamation DATA ADDED'))
  .catch(err=>res.json('Error' +err));

});

module.exports =router;