let express = require('express');
let router = express.Router();

let cProduct = require('./../controllers/controllerProduct');
let cCategory = require('./../controllers/controllerCategory');

router.get ('/api/product',cProduct.get);
router.get ('/api/product/byid/:id',cProduct.getById);
router.post('/api/product',cProduct.post);
router.put('/api/product',cProduct.put);
router.delete('/api/product',cProduct.delete);

router.get('/api/product/seed',cProduct.seed); // Для наполнения базы
router.get('/api/product/autocomplete',cProduct.autocomplete);

router.get('/api/product/getfields',cProduct.getFilterFields);
router.get('/api/product/byfields',cProduct.getByFields); // Для автозаполнения формы

router.get('/api/product/category/:categoryName',cProduct.getByCategory);
router.get('/api/product/subcategory/:subCategoryName',cProduct.getBySubCategory);
router.get('/api/product/recommended',cProduct.getByRecommendedProducts);

router.get('/api/category/seed',cCategory.seed)
router.get('/api/category/getcategory',cCategory.getCategory); // Для получения доступных полей фильтра
router.get('/api/category/getcategory/:name',cCategory.getCategoryByName);

// let cTelegram = require('./../controllers/SendTelegram')
// router.post('/sendTelegram',cTelegram.post);
// let cFiles = require('./../controllers/fileController');
// router.post('/api/files', cFiles.createFile);
// router.get('/api/files', cFiles.getFiles);

//let cFiles = require('./controllers/fileController');
//router.post('/api/files', cFiles.createFile);

module.exports = router;