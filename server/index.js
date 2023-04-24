const express = require('express');
const mongoose = require('mongoose');
const ecoaimsService = express()


const productModel = require('./models/products')


ecoaimsService.use(express.json())


 mongoose.connect('mongodb+srv://ecoaims:ySzvu0q1wnvzvDLn@ecoaims-service.qbgb1ep.mongodb.net/ecoaims-service-database?retryWrites=true&w=majority',{
    useNewUrlParser: true,
 } 
)
ecoaimsService.get('/', async (req, res)=>{
     const product = new productModel({
     productName:"LT600 Pro",
     productSerialNumber:"15282198612",
     issueDate:"12-10-2022",
     repairDate:"12-1-2023",
     manufacturingDate:"4-6-2000",
     pcbModelNo:"HTX 228972",
     laserSerialNumber:"PB1124",
     lemonSoftIssueNumber:"30040023",
     country:"FI",
     reportByCustomer:"Laser not working properly",
     reportByEcoaims:"Laser module broken",
     causeKnown:true,
     whatIsTheCause:"broken laser lense",
     Conclusion:"changed",
     whatMsgToCustomer:"Your device is fixed",
     componentsUsedInRepair:"laser PCS",
     userName:"Zahid Abdullah",})
     try{
        await product.save()

     }catch(err){
        console.log(err);
     }

})

ecoaimsService.listen (3001, ()=>{
    console.log('Server running in port 3001');
});