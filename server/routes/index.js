const Router = require('express').Router();
const userController = require('../controllers/user-controller');
const router = new Router();

router.get('/users', userController.getUsers);
router.post('/register');
router.post('/login');
router.post('/logout');
router.get('/activate/:link'); // Активация аккаунта по ссылке на почту
router.get('/refresh'); // Перезапись access токена


module.exports = router;
