const router = require("express").Router();
let Claims = require("../models/claim.model");

router.route("/all").get( async (req, res) => {
  Claims.find({})
  try {
    const result = await Claims.find({});
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

//ADD DATA
router.route("/add").post((req, res) => {
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
  newClaims
    .save()
    .then(() => res.json("CLAIMS ADDED"))
    .catch((err) => res.status(400).json("Error" + err));
});

//READ DATA
router.route("/:lemonSoftIssueNumber").get((req, res) => {
  Claims.find({
    lemonSoftIssueNumber: req.params.lemonSoftIssueNumber,
  })
    .then((claims) => res.json(claims))
    .catch((err) => res.status(400).json("Error" + err));
});

//DELETE DATA
router.route("/:id").delete((req, res) => {
  Claims.findByIdAndDelete(req.params.id)
    .then(() => res.json("CLAIMS DELETED"))
    .catch((err) => res.status(400).json("Error" + err));
});

//UPDATE DATA
router.route("/update/:id").post((req, res) => {
  Claims.findById(req.params.id).then((claims) => {
    claims.productName = req.body.productName;
    claims.productSerialNumber = req.body.productSerialNumber;
    claims.issueDate = req.body.issueDate;
    claims.repairDate = req.body.repairDate;
    claims.manufacturingDate = req.body.manufacturingDate;
    claims.pcbModelNo = req.body.pcbModelNo;
    claims.laserSerialNumber = req.body.laserSerialNumber;
    claims.lemonSoftIssueNumber = req.body.lemonSoftIssueNumber;
    claims.country = req.body.country;
    claims.reportByCustomer = req.body.reportByCustomer;
    claims.reportByEcoaims = req.body.reportByEcoaims;
    claims.causeKnown = req.body.causeKnown;
    claims.whatIsTheCause = req.body.whatIsTheCause;
    claims.Conclusion = req.body.Conclusion;
    claims.whatMsgToCustomer = req.body.whatMsgToCustomer;
    claims.componentsUsedInRepair = req.body.componentsUsedInRepair;
    claims.userName = req.body.userName;

    claims
      .save()
      .then(() => res.json("CLAIMS UPDATED"))
      .catch((err) => res.status(400).json("Error" + err));
  });
});

module.exports = router;
