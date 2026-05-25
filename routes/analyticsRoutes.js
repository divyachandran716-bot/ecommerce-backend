const router = require("express").Router();
const { recommend } = require("../controllers/analyticsController");

router.get("/recommend", recommend);

module.exports = router;