const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ecoaimsServiceApp = express();
require("dotenv").config();
const productModel = require("./models/products");

ecoaimsServiceApp.use(express.json());
ecoaimsServiceApp.use(cors());
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongdb database initiated and connected successfully");
});
// POST
ecoaimsServiceApp.post("/CREATE", async (req, res) => {
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
    res.status(200).send("Product saved successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});
//

// READ WORKING
ecoaimsServiceApp.get("/READ", async (req, res) => {
  try {
    const result = await productModel.find({});
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});
//

//READ ONE WORKING
ecoaimsServiceApp.get("/READ/:id", async (req, res) => {
  try {
    const product = await productModel.find({
      lemonSoftIssueNumber: req.params.id,
    });
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

// UPDATE
ecoaimsServiceApp.put("/update/:id", async (req, res) => {
  const productUpdates = req.body.newProductUpdate;
  const id = req.body.id;
  try {
    productModel.findByIdAndUpdate(id, (productUpdates) => {
      productUpdates.productName = productUpdates.productName;
      productUpdates.productSerialNumber = productUpdates.productSerialNumber;
      productUpdates.issueDate = productUpdates.issueDate;
      productUpdates.repairDate = productUpdates.repairDate;
      productUpdates.manufacturingDate = productUpdates.manufacturingDate;
      productUpdates.pcbModelNo = productUpdates.pcbModelNo;
      productUpdates.laserSerialNumber = productUpdates.laserSerialNumber;
      productUpdates.lemonSoftIssueNumber = productUpdates.lemonSoftIssueNumber;
      productUpdates.country = productUpdates.country;
      productUpdates.reportByCustomer = productUpdates.reportByCustomer;
      productUpdates.reportByEcoaims = productUpdates.reportByEcoaims;
      productUpdates.causeKnown = productUpdates.causeKnown;
      productUpdates.whatIsTheCause = productUpdates.whatIsTheCause;
      productUpdates.Conclusion = productUpdates.Conclusion;
      productUpdates.productName = productUpdates.productName;
      productUpdates.whatMsgToCustomer = productUpdates.whatMsgToCustomer;
      productUpdates.componentsUsedInRepair =
        productUpdates.componentsUsedInRepair;
      productUpdates.userName = productUpdates.userName;
    });
  } catch (err) {
    console.log(err);
  }
});
//DELETE WORKING

ecoaimsServiceApp.delete("/products/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await productModel.findById(id).exec();

    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }

    res.send(`Product with ID ${id} has been deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong while deleting the product");
  }
});

ecoaimsServiceApp.listen(3001, () => {
  console.log("Server running on port 3001");
});
