const userRoutes = require("../modules/users/userRoutes");
const recordsRoutes = require("../modules/records/recordsRoutes");
module.exports = router =>{
    userRoutes(router);
    recordsRoutes(router);
    return router;
}