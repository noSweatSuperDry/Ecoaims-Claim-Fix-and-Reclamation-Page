const router = require('express').Router();
let Claims = require('../models/claim.model');


router.route('/').get((req, res)=>{
    Claims.find().then(claims=>req.json(claims)).catch(err=>res.statusCode(400).json('Error: '+ err));
});

router.route('/add').post((req, res)=>{
    const productName = req.body.productName;
    const productSerialNumber = req.body.productSerialNumber;
    const issueDate = req.body.issueDate;
    const repairDate = req.body.repairDate;
    const manufacturingDate = req.body.manufacturingDate;
    const pcbModelNo = req.body.pcbModelNo;
    const laserSerialNumber = req.body.laserSerialNumber;
    const lemonSoftIssueNumber = req.body.lemonSoftIssueNumber;
    const country = req.body.country;
    const reportByCustomer = req.body.reportByCustomer;
    const reportByEcoaims = req.body.reportByEcoaims;
    const causeKnown = req.body.causeKnown;
    const whatIsTheCause = req.body.whatIsTheCause;
    const Conclusion = req.body.Conclusion;
    const whatMsgToCustomer = req.body.whatMsgToCustomer;
    const componentsUsedInRepair = req.body.componentsUsedInRepair;
    const userName = req.body.userName;
  
    const newClaims = new Claims({
      productName,
      productSerialNumber,
      issueDate,
      repairDate,
      manufacturingDate,
      pcbModelNo,
      laserSerialNumber,
      lemonSoftIssueNumber,
      country,
      reportByCustomer,
      reportByEcoaims,
      causeKnown,
      whatIsTheCause,
      Conclusion,
      whatMsgToCustomer,
      componentsUsedInRepair,
      userName,
    });
  newClaims.save()
  .then(()=>res.json('Claims ADDED'))
  .catch(err=>res.json('Error' +err));

});

module.exports =router;