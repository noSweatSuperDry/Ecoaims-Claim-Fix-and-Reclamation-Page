const router = require('express').Router();
let Reclamation = require('../models/reclamation.model');


router.route('/all').get(async (req, res)=>{

  try {
    const result = await Reclamation.find({});
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

router.route('/add').post((req, res)=>{
    const issueDate = req.body.reclamationInfo.issueDate;
    const partName = req.body.reclamationInfo.partName;
    const deviceSerialNumber = req.body.reclamationInfo.deviceSerialNumber;
    const howMany = req.body.reclamationInfo.howMany;
    const lemonSoftIssueNumber = req.body.reclamationInfo.lemonSoftIssueNumber;
    const electricalComponentType = req.body.reclamationInfo.electricalComponentType;
    const mechanicalComponentType = req.body.reclamationInfo.mechanicalComponentType;
    const information = req.body.reclamationInfo.information;
    const causeKnownR = req.body.reclamationInfo.causeKnownR;
    const whatIsTheCauseR = req.body.reclamationInfo.whatIsTheCauseR;
    const conclusionR = req.body.reclamationInfo.conclusionR;
    const repairedChangedComponent = req.body.reclamationInfo.repairedChangedComponent;
    const userNameR = req.body.reclamationInfo.userNameR;

  
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


//READ DATA
router.route('/:id').get((req,res)=>{
    Reclamation.findById(req.params.id)
    .then(reclamation=>res.json(reclamation))
      .catch(err=>res.status(400).json('Error' +err))
    });
    
    //DELETE DATA
    router.route('/:id').delete((req,res)=>{
        Reclamation.findByIdAndDelete(req.params.id)
      .then(()=>res.json('CLAIMS DELETED'))
        .catch(err=>res.status(400).json('Error' +err))
      });
    
    
    
      //UPDATE DATA
    router.route('/update/:id').post((req,res)=>{
        Reclamation.findById(req.params.id).then(reclamation => {
    
            reclamation.issueDate = req.body.issueDate;
            reclamation.partName = req.body.partName;
            reclamation.deviceSerialNumber = req.body.deviceSerialNumber;
            reclamation.howMany = req.body.howMany;
            reclamation.lemonSoftIssueNumber = req.body.lemonSoftIssueNumber;
            reclamation.electricalComponentType = req.body.electricalComponentType;
            reclamation.mechanicalComponentType = req.body.mechanicalComponentType;
            reclamation.information = req.body.information;
            reclamation.causeKnownR = req.body.causeKnownR;
            reclamation.whatIsTheCauseR = req.body.whatIsTheCauseR;
            reclamation.conclusionR = req.body.conclusionR;
            reclamation.repairedChangedComponent = req.body.repairedChangedComponent;
            reclamation.userNameR = req.body.userNameR;
        reclamation.save()
      .then(()=>res.json('CLAIMS UPDATED'))
        .catch(err=>res.status(400).json('Error' +err))
      })
    
    
      });

module.exports =router;