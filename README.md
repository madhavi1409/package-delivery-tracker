Package Delivery Tracker

This is a backend project built using Node.js, Express, and MongoDB.

APIs:
- POST /packages - To add a new package
- GET /packages - To view all packages
- PUT /packages/:id - To update package details
- DELETE /packages/:id - To delete a package

How to Run:
1. Run `npm install` in the terminal to install all dependencies.
2. Create a `.env` file in the root folder and add the following:
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/tracker
3. Start the server by running:
   `node server.js`