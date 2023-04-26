const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ecoaimsService = express();

const productModel = require("./models/products");

ecoaimsService.use(express.json());
ecoaimsService.use(cors());

mongoose
  .connect(
    "mongodb+srv://ecoaims:ySzvu0q1wnvzvDLn@ecoaims-service.qbgb1ep.mongodb.net/ecoaims-service-database?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => console.log(err));

// POST
ecoaimsService.post("/CREATE", async (req, res) => {
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

// READ
ecoaimsService.get("/READ", async (req, res) => {
  try {
    const result = await productModel.find({});
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

//READ ONE
ecoaimsService.get("/READ/:id", async (req, res) => {
  try {
    const product = await products.findOne({
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
ecoaimsService.put("/products/:id", async (req, res) => {
  const updatedProduct = {
    productName: req.body.productUpdate.productName,
    productSerialNumber: req.body.productUpdate.productSerialNumber,
    issueDate: req.body.productUpdate.issueDate,
    repairDate: req.body.productUpdate.repairDate,
    manufacturingDate: req.body.productUpdate.manufacturingDate,
    pcbModelNo: req.body.productUpdate.pcbModelNo,
    laserSerialNumber: req.body.productUpdate.laserSerialNumber,
    lemonSoftIssueNumber: req.body.productUpdate.lemonSoftIssueNumber,
    country: req.body.productUpdate.country,
    reportByCustomer: req.body.productUpdate.reportByCustomer,
    reportByEcoaims: req.body.productUpdate.reportByEcoaims,
    causeKnown: req.body.productUpdate.causeKnown,
    whatIsTheCause: req.body.productUpdate.whatIsTheCause,
    Conclusion: req.body.productUpdate.Conclusion,
    whatMsgToCustomer: req.body.productUpdate.whatMsgToCustomer,
    componentsUsedInRepair: req.body.productUpdate.componentsUsedInRepair,
    userName: req.body.productUpdate.userName,
  };

  try {
    const updated = await productModel.updateOne(
      { _id: req.params.id },
      updatedProduct
    );
    res.status(200).send("Product updated successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

//DELETE

ecoaimsService.delete("/products/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await productModel.findByIdAndRemove(id).exec();

    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }

    res.send(`Product with ID ${id} has been deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong while deleting the product");
  }
});

ecoaimsService.listen(3001, () => {
  console.log("Server running on port 3001");
});
