const router = express.Router();  
const db = require('../db/database');  

// POST /api/products/

router.post('/total-value', (req, res) => {  
 const products = req.body; // Expecting an array of product objects // Ensure products is an array if (!Array.isArray(products)) {  
 return res.status(400).json({ message: "Input should be an array of products." });  
 } ); 

 // Calculate total value
 const totalValue = products.reduce((total, product) => {  
 // Ensure product has the required fields 
 if (product.price && typeof product.price === 'number') {  
 return total + product.price;  
 }  
 return total; // Skip invalid product },0);  

 res.json({ totalValue });  
});  

module.exports = router;