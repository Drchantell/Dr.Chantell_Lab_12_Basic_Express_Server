# Lab 12: Build a Basic Express.js Server

This is my Lab 12 project for building a basic Express.js server. In this project, I created a simple backend server for a fictional local coffee shop called The Daily Grind. I used Node.js, Express, and the built-in path module to create the server and serve two HTML pages.

My server runs on port 3000. The home route at / serves the index.html file, and the /contact route serves the contact.html file. Both HTML files are stored inside the public folder.

I kept the code simple and beginner-friendly so I can clearly understand how Express routes work and how res.sendFile() sends HTML files to the browser.

To run this project, I open the project folder in VS Code, open the terminal, run npm install, and then run node server.js. I can also run npm start. After the server starts, I open <http://localhost:3000/> in my browser for the home page and <http://localhost:3000/contact> for the contact page.

Author: Dr. Chantell McDowell
Per Scholas Student
