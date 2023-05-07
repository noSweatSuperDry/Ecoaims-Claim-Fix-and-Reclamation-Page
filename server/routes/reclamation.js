const router = require("express").Router();
let Reclamation = require("../models/reclamation.model");

router.route("/all").get(async (req, res) => {
  try {
    const result = await Reclamation.find({});
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

router.route("/add").post(async (req, res) => {
  const issueDate = req.body.reclamationInfo.issueDate;
  const partName = req.body.reclamationInfo.partName;
  const deviceSerialNumber = req.body.reclamationInfo.deviceSerialNumber;
  const howMany = req.body.reclamationInfo.howMany;
  const lemonSoftIssueNumber = req.body.reclamationInfo.lemonSoftIssueNumber;
  const electricalComponentType =
    req.body.reclamationInfo.electricalComponentType;
  const mechanicalComponentType =
    req.body.reclamationInfo.mechanicalComponentType;
  const information = req.body.reclamationInfo.information;
  const causeKnownR = req.body.reclamationInfo.causeKnownR;
  const whatIsTheCauseR = req.body.reclamationInfo.whatIsTheCauseR;
  const conclusionR = req.body.reclamationInfo.conclusionR;
  const repairedChangedComponent =
    req.body.reclamationInfo.repairedChangedComponent;
  const userNameR = req.body.reclamationInfo.userNameR;

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
  await newReclamation
    .save()
    .then(() => res.json("Reclamation DATA ADDED"))
    .catch((err) => res.json("Error" + err));
});

//READ DATA BY ID
router.route("/:lemonSoftIssueNumber").get(async (req, res) => {
  await Reclamation.find({
    lemonSoftIssueNumber: req.params.lemonSoftIssueNumber,
  })
    .then((reclaims) => res.json(reclaims))
    .catch((err) => res.status(400).json("Error" + err));
});
//DELETE DATA
router.route("/:id").delete(async (req, res) => {
  await Reclamation.findByIdAndDelete(req.params.id)
    .then(() => res.json("RECLAMATION DELETED"))
    .catch((err) => res.status(400).json("Error" + err));
});
//UPDATE DATA
router.route("/update/:id").put(async (req, res) => {
  try {
    const productListId = req.params.id;
    const productList = await Reclamation.findOneAndUpdate(
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
