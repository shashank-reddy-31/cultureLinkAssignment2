
## Table of Contents- [Features](#features)  
- [Technologies](#technologies)  
- [Setup Instructions](#setup-instructions)  
- [API Endpoints](#api-endpoints)  
- [Testing the API](#testing-the-api)  
- [Contributing](#contributing)  
- [License](#license)  

## Features- Calculates the total value of products provided in a request.  
- Simple error handling and validation.  
- Lightweight and easy to set up with in-memory SQLite database.  

## Technologies- Node.js- Express- SQLite (in-memory database)  
- Body-parser (to parse JSON requests)  

## Setup Instructions1. **Clone the repository:**  

 ```bash git clone https://github.com/yourusername/product-value-api.git cd product-value-api ```  

2. **Install the dependencies:**  

 ```bash npm install ```  

3. **Run the application:**  

 ```bash node index.js ```  

 The server will start running on `http://localhost:5000`.  

## API Endpoints### POST /api/products/total-valueThis endpoint accepts an array of product objects in the request body and returns the total value of all products.  

#### Request Body Example```json[  
 {"name": "Product1", "price":10.50, "quality": "high"},  
 {"name": "Product2", "price":20.00, "quality": "medium"},  
 {"name": "Product3", "price":30.75, "quality": "low"}  
]
