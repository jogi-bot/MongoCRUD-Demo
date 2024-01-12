# MongoCRUD-Demo

MongoCRUD-Demo is a simple demonstration of MongoDB CRUD operations using Node.js and Mongoose.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jogi-bot/MongoCRUD-Demo.git
cd MongoCRUD-Demo

Install dependencies:

npm install

Configure MongoDB:

Create a MongoDB database.
Update the MongoDB connection details in dbconfig/db.js.
Run the application:

node index.js

The application should now be running on http://localhost:3000.

API Endpoints
POST /api/create: Create a new document.
GET /api/read/:id: Read a document by ID.
PUT /api/update/:id: Update a document by ID.
DELETE /api/delete/:id: Delete a document by ID.
Postman Collection
Explore and test the API using the provided Postman Collection: Book_CRUD.postman_collection.json.

License
This project is licensed under the MIT License - see the LICENSE file for details.
