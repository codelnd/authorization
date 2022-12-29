const Router = require('express');
const userController = require('../controllers/user-controller');
const router = new Router();

router.get('/users', userController.getUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate); // Активация аккаунта по ссылке на почту
router.get('/refresh', userController.refresh); // Перезапись access токена


module.exports = router;
