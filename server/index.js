const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const ecoaimsService = express()


const productModel = require('./models/products')


ecoaimsService.use(express.json());
ecoaimsService.use(cors());

 mongoose.connect('mongodb+srv://ecoaims:ySzvu0q1wnvzvDLn@ecoaims-service.qbgb1ep.mongodb.net/ecoaims-service-database?retryWrites=true&w=majority',{
    useNewUrlParser: true,
 } 
)
ecoaimsService.post('/insert', async (req, res)=>{

   const productName = req.body.productInfo.productName
   const productSerialNumber = req.body.productInfo.productSerialNumber
   const issueDate = req.body.productInfo.issueDate
   const repairDate = req.body.productInfo.repairDate
   const manufacturingDate = req.body.productInfo.manufacturingDate
   const pcbModelNo = req.body.productInfo.pcbModelNo
   const laserSerialNumber = req.body.productInfo.laserSerialNumber
   const lemonSoftIssueNumber = req.body.productInfo.lemonSoftIssueNumber
   const country = req.body.productInfo.country
   const reportByCustomer = req.body.productInfo.reportByCustomer
   const reportByEcoaims = req.body.productInfo.reportByEcoaims
   const causeKnown = req.body.productInfo.causeKnown
   const whatIsTheCause = req.body.productInfo.whatIsTheCause
   const Conclusion = req.body.productInfo.Conclusion
   const whatMsgToCustomer = req.body.productInfo.whatMsgToCustomer
   const componentsUsedInRepair = req.body.productInfo.productName
   const userName = req.body.productInfo.userName
     const product = new productModel({
     productName:productName,
     productSerialNumber:productSerialNumber,
     issueDate:issueDate,
     repairDate:repairDate,
     manufacturingDate:manufacturingDate,
     pcbModelNo:pcbModelNo,
     laserSerialNumber:laserSerialNumber,
     lemonSoftIssueNumber:lemonSoftIssueNumber,
     country:country,
     reportByCustomer:reportByCustomer,
     reportByEcoaims:reportByEcoaims,
     causeKnown:causeKnown,
     whatIsTheCause:whatIsTheCause,
     Conclusion:Conclusion,
     whatMsgToCustomer:whatMsgToCustomer,
     componentsUsedInRepair:componentsUsedInRepair,
     userName:userName,})
     try{
        await product.save()

     }catch(err){
        console.log(err);
     }

})

ecoaimsService.listen (3001, ()=>{
    console.log('Server running in port 3001');
});