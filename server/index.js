const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ecoaimsService = express();

const productModel = require('./models/products');

ecoaimsService.use(express.json());
ecoaimsService.use(cors());

mongoose.connect('mongodb+srv://ecoaims:ySzvu0q1wnvzvDLn@ecoaims-service.qbgb1ep.mongodb.net/ecoaims-service-database?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).catch(err => console.log(err));

// POST
ecoaimsService.post('/INSERT', async (req, res) => {
   const productName = req.body.productInfo.productName;
   const productSerialNumber = req.body.productInfo.productSerialNumber;
   const issueDate = req.body.productInfo.issueDate;
   const repairDate = req.body.productInfo.repairDate;
   const manufacturingDate = req.body.productInfo.manufacturingDate;
   const pcbModelNo = req.body.productInfo.pcbModelNo;
   const laserSerialNumber = req.body.productInfo.laserSerialNumber;
   const lemonSoftIssueNumber = req.body.productInfo.lemonSoftIssueNumber;
   const country = req.body.productInfo.country;
   const reportByCustomer = req.body.productInfo.reportByCustomer;
   const reportByEcoaims = req.body.productInfo.reportByEcoaims;
   const causeKnown = req.body.productInfo.causeKnown;
   const whatIsTheCause = req.body.productInfo.whatIsTheCause;
   const Conclusion = req.body.productInfo.Conclusion;
   const whatMsgToCustomer = req.body.productInfo.whatMsgToCustomer;
   const componentsUsedInRepair = req.body.productInfo.componentsUsedInRepair;
   const userName = req.body.productInfo.userName;

   const product = new productModel({
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

   try {
      await product.save();
      res.status(200).send('Product saved successfully');
   } catch (err) {
      console.log(err);
      res.status(500).send('Internal server error');
   }
});

// READ
ecoaimsService.get('/READ', async (req, res) => {
   try {
      const result = await productModel.find({});
      res.status(200).send(result);
   } catch (err) {
      console.log(err);
      res.status(500).send('Internal server error');
   }
});

ecoaimsService.listen(3001, () => {
   console.log('Server running on port 3001');
});
