MongoCRUD-Demo
A simple MongoDB CRUD (Create, Read, Update, Delete) demo using Node.js, Express, and Mongoose.

Table of Contents
Overview
Directory Structure
Getting Started
API Endpoints
Postman Collection
Contributing
License
Overview
MongoCRUD-Demo is a demonstration of basic CRUD operations with MongoDB. It includes a simple Express.js server, Mongoose models, and routes to perform CRUD operations on a MongoDB database.

Directory Structure
lua
Copy code
MongoCRUD-Demo/
|-- controller/
|   |-- controller.js
|-- dbconfig/
|   |-- db.js
|-- model/
|   |-- model.js
|-- routes/
|   |-- index.js
|-- .gitignore
|-- Book_CRUD.postman_collection
|-- index.js
|-- package-lock.json
|-- package.json
controller/: Contains the controller logic for handling CRUD operations.
dbconfig/: Includes the configuration file for connecting to MongoDB.
model/: Defines the Mongoose model for the MongoDB collection.
routes/: Contains route definitions for the Express application.
.gitignore: Specifies files and directories to be ignored by version control.
Book_CRUD.postman_collection: Postman collection for testing API endpoints.
index.js: Entry point for the Express application.
package-lock.json and package.json: Node.js project configuration files.
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/jogi-bot/MongoCRUD-Demo.git
Install dependencies:

bash
Copy code
cd MongoCRUD-Demo
npm install
Configure MongoDB connection:

Update dbconfig/db.js with your MongoDB URI.

Run the application:

bash
Copy code
node index.js
API Endpoints
POST /api/create: Create a new document in the MongoDB collection.

GET /api/read/:id: Retrieve a document by its ID from the MongoDB collection.

PUT /api/update/:id: Update an existing document in the MongoDB collection by its ID.

DELETE /api/delete/:id: Delete a document from the MongoDB collection by its ID.

Postman Collection
Import the provided Postman collection Book_CRUD.postman_collection to test the API endpoints.

Contributing
Contributions are welcome! Feel free to open issues and pull requests.

License
This project is licensed under the MIT License.

Feel free to customize the README further based on your specific project details.
