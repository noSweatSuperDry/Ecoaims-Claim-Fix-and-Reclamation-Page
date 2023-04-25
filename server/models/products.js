const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
    
    productName:{
        type: String,
        required: true
    },
    productSerialNumber:{
        type: String,
        required: true
    },
    issueDate:{
        type: String,
        required: true
    },
    repairDate:{
        type: String,
        required: true
    },
    manufacturingDate:{
        type: String,
        required: false
    },
    pcbModelNo:{
        type: String,
        required: false
    },
    laserSerialNumber:{
        type: String,
        required: false
    },
    lemonSoftIssueNumber:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    reportByCustomer:{
        type: String,
        required: false
    },
    reportByEcoaims:{
        type: String,
        required: true
    },
    causeKnown:{
        type: String,
        required: false
    },
    whatIsTheCause:{
        type: String,
        required: false
    },
    Conclusion:{
        type: String,
        required: false
    },
    whatMsgToCustomer:{
        type: String,
        required: false
    },

    componentsUsedInRepair:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },

});

const products = mongoose.model('products', productsSchema)
module.exports = products