const express = require('express')

const router = express.Router()

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        docTitle: 'The Mustache Add Product Page',
        path: '/admin/add-product',
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    })
})

router.post('/add-product', (req, res) => {
    products.push({
        title: req.body.title
    })
    res.redirect('/')
})

exports.routes = router;
exports.products = products;