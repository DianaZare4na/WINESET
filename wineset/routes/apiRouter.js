let express = require('express');
let router = express.Router();

let cProduct = require('./../controllers/controllerProduct');
router.get ('/api/product',cProduct.get);
router.get ('/api/product/byid/:id',cProduct.getById);
router.post('/api/product',cProduct.post);
router.put('/api/product',cProduct.put);
router.delete('/api/product',cProduct.delete);

router.get('/api/product/seed',cProduct.seed); // Для наполнения базы
router.get('/api/product/autocomplete',cProduct.autocomplete);

router.get('/api/product/getfields',cProduct.getFilterFields);
router.get('/api/product/byfields',cProduct.getByFields); // Для автозаполнения формы
// let cTelegram = require('./../controllers/SendTelegram')
// router.post('/sendTelegram',cTelegram.post);
// let cFiles = require('./../controllers/fileController');
// router.post('/api/files', cFiles.createFile);
// router.get('/api/files', cFiles.getFiles);

//let cFiles = require('./controllers/fileController');
//router.post('/api/files', cFiles.createFile);

module.exports = router;