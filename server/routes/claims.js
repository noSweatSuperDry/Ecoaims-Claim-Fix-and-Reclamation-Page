const router = require("express").Router();
let Claims = require("../models/claim.model");

router.route("/all").get(async (req, res) => {
  try {
    const result = await Claims.find({});
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

//ADD DATA
router.route("/add").post(async (req, res) => {
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
  await newClaims
    .save()
    .then(() => res.json("CLAIMS ADDED"))
    .catch((err) => res.status(400).json("Error" + err));
});

//READ DATA BY ID
router.route("/:lemonSoftIssueNumber").get(async (req, res) => {
  await Claims.find({
    lemonSoftIssueNumber: req.params.lemonSoftIssueNumber,
  })
    .then((claims) => res.json(claims))
    .catch((err) => res.status(400).json("Error" + err));
});

//DELETE DATA
router.route("/:id").delete(async (req, res) => {
  await Claims.findByIdAndDelete(req.params.id)
    .then(() => res.json("CLAIMS DELETED"))
    .catch((err) => res.status(400).json("Error" + err));
});

//UPDATE DATA
router.route("/update/:id").put(async (req, res) => {
  try {
    const productListId = req.params.id;
    const productList = await Claims.findOneAndUpdate(
      { _id: productListId },
      req.body.productUpdated,
      { new: true }
    );

    res.json({ productList });
  } catch (e) {
    res.status(400).json({ error: "Backend wrong" });
  }
});

module.exports = router;
