const userRoutes = require("../modules/users/userRoutes");
module.exports = router =>{
    userRoutes(router);
    return router;
}