const userController = require("./userController");
const auth = require("../../middleware/auth");

module.exports = router =>{
    router.get('/users', userController.getUsers);
    router.post('/user',userController.storeUserData);
    router.put('/user',userController.updateUserData);
    router.get('/user/:id',userController.getUserById);
    router.delete('/user/:id', auth.validateToken, userController.deleteUser);
    router.post('/auth',userController.authenticateUser);
}