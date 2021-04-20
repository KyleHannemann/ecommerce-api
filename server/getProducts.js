const products = require("../products.json");
const getProducts = (req, res) => {
    if (req.query.price){
        let filterByPrice = products.filter((product)=>{
            if (product.price >= parseFloat(req.query.price)){
                return product;
            }
        })
        res.status(200).send(filterByPrice);
    }
    else {
    res.status(200).send(products);
    }
}

module.exports = getProducts