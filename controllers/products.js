const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        docTitle: "The ejs Add Product Page",
        path: "/admin/add-product",
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    });
};

exports.postAddProduct = (req, res) => {
    products.push({
        title: req.body.title
    })
    res.redirect('/')
};

exports.getProducts = (req, res, next) => {
    res.render("shop", {
        prods: products,
        docTitle: "The Pug Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};