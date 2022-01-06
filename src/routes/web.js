import express from 'express';

import userController from '../controllers/userController'
import foodController from '../controllers/foodController'


let router = express.Router();

let initWebRoutes = (app) => {

 

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUSER);
    router.post('/api/create-new-userAdm', userController.handleCreateNewUser);
    router.put('/api/edit-userAdm', userController.handleEditUser);
    router.delete('/api/delete-userAdm', userController.handleDeleteUser);




    router.get('/api/get-all-food',foodController.handleGetAllfood);
    router.post('/api/create-new-food',foodController.handleCreateNewfood);
    router.put('/api/edit-food', foodController.handleEditfood);
    router.delete('/api/delete-food', foodController.handleDeletefood);

     
    app.use("/", router)
}
module.exports = initWebRoutes;