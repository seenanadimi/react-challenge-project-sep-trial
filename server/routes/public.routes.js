const express = require("express");
const router = express.Router();
const {
  test,
  currentOrders,
  addOrder,
  editOrder,
  deleteOrder,
  deleteAll,
  liveMode,
} = require("../controllers/OrderControllers");

router.get("/test", test);

router.get("/current-orders", currentOrders);

router.post("/add-order", addOrder);

router.post("/edit-order", editOrder);

router.post("/delete-order", deleteOrder);

router.delete("/delete-all", deleteAll);

router.post("/live-mode", liveMode);

module.exports = router;
