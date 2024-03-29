const express = require("express");
const data = require("./index.json");

const router = express.Router();
const multer = require("multer")();

router.post("/", multer.none(), (req, res) => {
    const requestData = JSON.parse(req.body.data);
    const returnData = data.find(customerData => {
        if (
            requestData.customerId === customerData.customerId &&
            requestData.creditRequestId === customerData.creditRequestId &&
            requestData.actionName === customerData.actionName &&
            requestData.referenceType === customerData.referenceType
        ) {
            return customerData;
        }
    });
    res.send(returnData);
});

module.exports = router;
