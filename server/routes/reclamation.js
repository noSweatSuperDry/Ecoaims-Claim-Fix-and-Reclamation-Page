const router = require('express').Router();
let Reclamation = require('../models/reclamation.model');


router.route('/all').get((req, res)=>{
    Reclamation.find().then(reclamation=>res.json(reclamation)).catch(err=>res.statusCode(400).json('Error: '+ err));
});

router.route('/add').post((req, res)=>{
    const issueDate = req.body.productInfo.issueDate;
    const partName = req.body.productInfo.partName;
    const deviceSerialNumber = req.body.productInfo.deviceSerialNumber;
    const howMany = req.body.productInfo.howMany;
    const lemonSoftIssueNumber = req.body.productInfo.lemonSoftIssueNumber;
    const electricalComponentType = req.body.productInfo.electricalComponentType;
    const mechanicalComponentType = req.body.productInfo.mechanicalComponentType;
    const information = req.body.productInfo.information;
    const causeKnownR = req.body.productInfo.causeKnownR;
    const whatIsTheCauseR = req.body.productInfo.whatIsTheCauseR;
    const conclusionR = req.body.productInfo.conclusionR;
    const repairedChangedComponent = req.body.productInfo.repairedChangedComponent;
    const userNameR = req.body.productInfo.userNameR;

  
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