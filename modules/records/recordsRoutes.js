const recordsController = require("./recordsController");
const auth = require("../../middleware/auth");

module.exports = router =>{
    router.get('/records', recordsController.getRecords);
    router.get('/managed-records', recordsController.manageRecords);
}