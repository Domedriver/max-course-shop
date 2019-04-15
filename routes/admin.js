const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

const products = [];

router.get('/add-product', (req, res, next) => {        
    res.render('add-product', {docTitle: 'The Pug Add Product Page'})
})

router.post('/add-product', (req, res) => {
    products.push({title: req.body.title})
    console.log('admin.js ', req.body)
    res.redirect('/')
})


exports.routes = router;
exports.products = products;

// Used below export when just exporting router
// module.exports = router