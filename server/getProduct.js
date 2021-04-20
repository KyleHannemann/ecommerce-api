const products = require('../products.json')
const getProduct = (req,res) => {
    let item = products.filter((product)=>{
        if(product.id === parseInt(req.params.id)){
        return product;
        }
        
    });
    if(item.length < 1){
        res.status(500).send('item not found')
    }
    else{
    res.status(200).send(item);
    }
}

module.exports = getProduct;//