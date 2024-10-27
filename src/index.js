const bodyParser = require('body-parser');  
const productRoutes = require('./routes/products');  
const db = require('./db/database');  

const app = express();  
const PORT = process.env.PORT ||5000;  

// 
Middleware
app.use(bodyParser.json()); // For parsing application/json// Routes
app.use('/api/products', productRoutes);  

// Start server
app.listen(PORT, () => {  
 console.log(`Server is running on http://localhost:${PORT}`);  
});

