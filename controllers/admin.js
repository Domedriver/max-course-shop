const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
        docTitle: "The ejs Add Product Page",
        path: "/admin/add-product",
    });
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
};

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("admin/products", {
            prods: products,
            docTitle: 'Admin Products',
            path: '/admin/products'
        })
    })
}